# otf-agent

![Version: 0.1.3](https://img.shields.io/badge/Version-0.1.3-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.1.13](https://img.shields.io/badge/AppVersion-0.1.13-informational?style=flat-square)

A Helm chart for OTF Agent

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| env.OTF_ADDRESS | string | `""` |  |
| env.OTF_CONCURRENCY | string | `"1"` |  |
| env.OTF_LOG_FORMAT | string | `"default"` |  |
| env.OTF_PLUGIN_CACHE | string | `"false"` |  |
| env.OTF_TOKEN | string | `""` |  |
| env.OTF_V | string | `"0"` |  |
| fullnameOverride | string | `""` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.repository | string | `"leg100/otf-agent"` |  |
| image.tag | string | `"0.1.13"` |  |
| imagePullSecrets | list | `[]` |  |
| nameOverride | string | `""` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations | object | `{}` |  |
| podSecurityContext | object | `{}` |  |
| rbac.create | bool | `true` |  |
| replicaCount | int | `1` |  |
| resources | object | `{}` |  |
| securityContext | object | `{}` |  |
| service.port | int | `80` |  |
| service.type | string | `"ClusterIP"` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |
| tolerations | list | `[]` |  |
| topologySpreadConstraints | list | `[]` |  |

