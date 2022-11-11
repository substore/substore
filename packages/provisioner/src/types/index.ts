import { ServiceProtocolType } from "../gql/sdk";

interface Secrets {
  key: string;
  value: string;
}
interface Disk {
  size: number;
  destination: string;
}
interface Network {
  port: number;
  internalPort: number;
}
export interface ProvisionInput {
  image: string;
  secrets: Secrets[];
  disk: Disk;
  network: Network;
}

export interface DeployImageDefinition {
  services: {
    internal_port: number;
    ports: {
      port: number;
    }[];
    protocol: ServiceProtocolType;
  }[];
  mounts: {
    source: string;
    destination: string;
  };
}
