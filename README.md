# otf-agent

A Helm chart for OTF Agent

## Installation

```sh
helm repo add otf-agent https://pat-s.github.io/otf-agent-helm
helm install otf-agent otf-agent/otf-agent
```

## Scope

This chart is intended to be used to deploy OTF agents on remote runners when the OTF server instance is running outside of a cluster or a different cluster.
If the OTF server instance is also running on the same cluster, the [official OTF chart](https://github.com/leg100/otf-charts) should be used instead.
