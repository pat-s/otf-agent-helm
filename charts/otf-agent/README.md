# otf-agent

<img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpat-s%2Fotf-agent-helm%2Fmain%2Fcharts%2Fotf-agent%2FChart.yaml&query=%24.version&logo=helm&label=Chart%20Version">
<img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fpat-s%2Fotf-agent-helm%2Fmain%2Fcharts%2Fotf-agent%2FChart.yaml&query=%24.appVersion&label=appVersion">

A Helm chart for OTF Agent

## Maintainers

| Name  | Email                       | Url |
| ----- | --------------------------- | --- |
| pat-s | <patrick.schratz@gmail.com> |     |

## Values

| Key                        | Type   | Default                                                                                                                                                                                                         | Description |
| -------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| affinity                   | object | `{}`                                                                                                                                                                                                            |             |
| env.OTF_ADDRESS            | string | `""`                                                                                                                                                                                                            |             |
| env.OTF_CONCURRENCY        | string | `"1"`                                                                                                                                                                                                           |             |
| env.OTF_LOG_FORMAT         | string | `"default"`                                                                                                                                                                                                     |             |
| env.OTF_PLUGIN_CACHE       | string | `"false"`                                                                                                                                                                                                       |             |
| env.OTF_TOKEN              | string | `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTgxNDkxMTAsImtpbmQiOiJhZ2VudF90b2tlbiIsIm9yZ2FuaXphdGlvbiI6ImN5bmtyYSIsInN1YiI6ImF0LUdiYVBldFVZNDZVQjB3dzgifQ.-4nZYNm0x1F6Q-9eNUrmMY_WceRsYbhRq3LkQGyRzJw"` |             |
| env.OTF_V                  | string | `"0"`                                                                                                                                                                                                           |             |
| fullnameOverride           | string | `""`                                                                                                                                                                                                            |             |
| image.pullPolicy           | string | `"IfNotPresent"`                                                                                                                                                                                                |             |
| image.repository           | string | `"leg100/otf-agent"`                                                                                                                                                                                            |             |
| image.tag                  | string | `"0.1.18"`                                                                                                                                                                                                      |             |
| imagePullSecrets           | list   | `[]`                                                                                                                                                                                                            |             |
| nameOverride               | string | `""`                                                                                                                                                                                                            |             |
| nodeSelector               | object | `{}`                                                                                                                                                                                                            |             |
| podAnnotations             | object | `{}`                                                                                                                                                                                                            |             |
| podSecurityContext         | object | `{}`                                                                                                                                                                                                            |             |
| rbac.create                | bool   | `true`                                                                                                                                                                                                          |             |
| replicaCount               | int    | `1`                                                                                                                                                                                                             |             |
| resources                  | object | `{}`                                                                                                                                                                                                            |             |
| securityContext            | object | `{}`                                                                                                                                                                                                            |             |
| service.port               | int    | `80`                                                                                                                                                                                                            |             |
| service.type               | string | `"ClusterIP"`                                                                                                                                                                                                   |             |
| serviceAccount.annotations | object | `{}`                                                                                                                                                                                                            |             |
| serviceAccount.create      | bool   | `true`                                                                                                                                                                                                          |             |
| serviceAccount.name        | string | `""`                                                                                                                                                                                                            |             |
| tolerations                | list   | `[]`                                                                                                                                                                                                            |             |
| topologySpreadConstraints  | list   | `[]`                                                                                                                                                                                                            |             |

---

Autogenerated from chart metadata using [helm-docs v1.11.3](https://github.com/norwoodj/helm-docs/releases/v1.11.3)
