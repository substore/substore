import exec from "child_process";
import { PutObjectCommand, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { createReadStream } from "fs";
import { client } from "../../../provisioner/src/gql/client";

const uploadtoBucket = async ({ name, path }: {name: string, path: string}) => {
    console.log("Uploading to bucket");
    const bucket = process.env.AWS_S3_BUCKET

    const clientOptions: S3ClientConfig = {
        region: process.env.AWS_S3_REGION,
    }

    if (process.env.AWS_S3_ENDPOINT) {
        console.log(`Using custom endpoint: ${process.env.AWS_S3_ENDPOINT}`)
        clientOptions['endpoint'] = process.env.AWS_S3_ENDPOINT;
    }

    const client = new S3Client(clientOptions);

    await client.send(
        new PutObjectCommand({
            Bucket: bucket,
            Key: name,
            Body: createReadStream(path),
        })
    )

    console.log("Backup created.");
}   

const dumpToFile = async(path: string) => {
    
}