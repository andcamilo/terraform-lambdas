terraform {
  required_version = "1.2.2"
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project   = "Serverless REST API Tutorial"
      CreatedAt = "2022-08-03"
      ManagedBy = "Terraform"
      Owner     = "Camilo Barrera"
      Env       = var.env
    }
  }
}
