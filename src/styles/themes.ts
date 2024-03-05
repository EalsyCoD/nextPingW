const theme = {
  colors: {},
  fonts: {},
  fontWeight: {
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
  },
  RANGE: {
    NONE: 0,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 48,
  },
};

const CENTER = `
  display: flex;
  justify-content: center;
  align-items:center;
  `;
const SPACE_BETWEEN = `
  display: flex;
  justify-content: space-between;
  align-items:center;
  `;
const COLUMN = `
  display: flex;
  flex-direction:column;
`;

export { CENTER, COLUMN, SPACE_BETWEEN, theme };
