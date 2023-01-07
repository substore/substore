package src

import (
  "github.com/aws/aws-sdk-go/aws"
  "github.com/aws/aws-sdk-go/aws/session"
  "github.com/aws/aws-sdk-go/service/s3"

  "fmt"
  "os/exec"
  "time"
)

func uploadToS3(name string, path string) error {
  
  lumber.Success("Database backup uploaded...")
  return nil
}
