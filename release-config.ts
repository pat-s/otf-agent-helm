export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" otf-agent/Chart.yaml`);
    await exec("helm dependency update");
    await exec(
      "git add otf-agent/Chart.yaml"
    );
  },
};
