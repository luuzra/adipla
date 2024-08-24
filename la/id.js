// Example data
const unaggregatedData = [10, 15, 20, 25, 30]; // Individual data points
const aggregatedData = [12, 22, 32]; // Aggregated data

// Check if the unaggregated domain is applicable
const isUnaggregatedApplicable = unaggregatedData.length > 0;

// Remove unaggregated domain if not applicable
if (!isUnaggregatedApplicable) {
    // Perform removal operation
    unaggregatedData.length = 0;
}

console.log(unaggregatedData); // Outputs: [] (empty array if unaggregated domain is not applicable)
