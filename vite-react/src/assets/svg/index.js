// const requireAll = (requireContext) => requireContext.keys().map(requireContext);
// const svgs = require.context("./",false,/\.svg$/);
// requireAll(svgs);

const requireAll = import.meta.globEager("./*svg");
for (const path in requireAll) {
    requireAll[path]
}
