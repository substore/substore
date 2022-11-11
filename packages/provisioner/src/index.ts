import * as dotenv from "dotenv";
dotenv.config();

import { client } from "./gql/client";
import { ServiceProtocolType } from "./gql/sdk";
import { FLY_ORG_ID, FLY_REGION } from "./constant";
import { ProvisionInput, DeployImageDefinition } from "./types";

export const provision = async (input: ProvisionInput): Promise<string> => {
  const app = await client.CreateApp({
    input: {
      organizationId: FLY_ORG_ID,
    },
  });
  if (!app.createApp) {
    throw new Error("app creation failed");
  }

  await client.SetSecrets({
    input: {
      appId: app.createApp.app.id,
      secrets: input.secrets,
    },
  });

  const volumeName = `${app.createApp.app.id.replaceAll("-", "_")}_volume`;
  await client.CreateVolume({
    input: {
      appId: app.createApp.app.id,
      sizeGb: input.disk.size,
      name: volumeName,
      region: FLY_REGION,
    },
  });

  const definition: DeployImageDefinition = {
    services: [
      {
        internal_port: input.network.internalPort,
        ports: [
          {
            port: input.network.port,
          },
        ],
        protocol: ServiceProtocolType.Tcp,
      },
    ],
    mounts: {
      source: volumeName,
      destination: input.disk.destination,
    },
  };

  await client.DeployImage({
    input: {
      appId: app.createApp.app.id,
      image: input.image,
      definition: definition,
    },
  });

  return app.createApp.app.id;
};

export const deprovision = async (appId: string) => {
  await client.DeleteApp({
    appId: appId,
  });
};
