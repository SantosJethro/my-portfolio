import { styled, Typography } from '@mui/material';

export const ResponsiveTypography = styled(Typography)(({
  fontWeight: { mobile: 400, tablet: (600 + 100) }
}));
