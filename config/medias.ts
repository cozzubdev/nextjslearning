export const Breakpoints = {
  sm: '48em', // 768px
  md: '64em', // 1024px
  lg: '75em', // 1200px
  xl: '90em', // 1440px
  xxl: '120em', // 1920px
  xxxl: '140em', // 2240px
};

export const Media = {
  sm: `(min-width: ${Breakpoints.sm})`, // 768px
  md: `(min-width: ${Breakpoints.md})`, // 992px
  lg: `(min-width: ${Breakpoints.lg})`, // 1200px
  xl: `(min-width: ${Breakpoints.xl})`, // 1440px
  xxl: `(min-width: ${Breakpoints.xxl})`, // 1920px
  xxxl: `(min-width: ${Breakpoints.xxxl})`, // 2240px
};
