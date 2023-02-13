import { exec } from "child_process";
import { PutObjectCommand, S3Client, S3ClientConfig, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { createReadStream } from "fs";

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
    console.log("dumping db to file");

    await new Promise((resolve, reject) => {
        exec(
            // Probably need to fetch from Prisma and get the Store URL.
            `pg_dump ${process.env.BACKUP_DATABASE_URL} -F t | gzip > ${path}`,
            (error, stdout, stderr) => {
                if (error) {
                    reject({ error: JSON.stringify(error), stderr });
                    return;
                }

                resolve(undefined);
            }
        )
    });

    console.log("DB dumped")
}

export const BackupDB = async () => {
    console.log("Initating DB Backup");

    let date = Date().toString()
    const timestamp = date.replace(/[:.]+/g, '-')
    const filename = `substore-backup-${timestamp}.tar.gz`
    const filepath = `/tmp/{$filename}`

    await dumpToFile(filepath)
    await uploadtoBucket({name: filename, path: filename})

    console.log("DB Backup done!");
}

export const deleteBackup = async ({ name, path }: {name: string, path: string})  => {
    console.log("deleting backup..")

    const bucket = process.env.AWS_S3_BUCKET;

    const clientOptions: S3ClientConfig = {
        region: process.env.AWS_S3_REGION
    }

    if (process.env.AWS_S3_ENDPOINT) {
        console.log(`Using custom endpoint: ${process.env.AWS_S3_ENDPOINT}`)
        clientOptions['endpoint'] = process.env.AWS_S3_ENDPOINT;
    }

    const client = new S3Client(clientOptions);

    await client.send(
        new DeleteObjectCommand({
            Bucket: bucket,
            Key: name,
        })
    )

    console.log("Backup deleted.")
}