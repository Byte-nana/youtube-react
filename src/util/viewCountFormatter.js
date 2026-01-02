const viewCountFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'short',
  maximumFractionDigits: 1,
});

export default viewCountFormatter;
// formatter.format('1210');
