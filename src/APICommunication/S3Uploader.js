import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

export const S3Uploader = (file, filename) => {
  return new Promise((resolve, reject) => {
    const s3Client = new S3Client({
      region: "eu-central-1",
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: "eu-central-1" }),
        identityPoolId: "eu-central-1:6f03169c-1beb-4c73-9d38-53f444f951f5",
      }),
    });

    const params = {
      Bucket: "mychatsanboxrepo",
      Key: "avatars/" + filename,
      Body: file,
      ContentType: file.type,
    };

    s3Client
      .send(new PutObjectCommand(params))
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
        reject(err);
      });
  });
};
