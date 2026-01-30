import { style } from '@vanilla-extract/css';

export const wrapper = style({
  minHeight: 'calc(100vh - 56px)', // Header 높이 고려
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  textAlign: 'center',
});

export const image = style({
  width: '120px',
  marginBottom: '16px',
});

export const code = style({
  fontSize: '48px',
  fontWeight: 700,
  marginBottom: '8px',
});

export const text = style({
  fontSize: '16px',
  color: '#555',
  marginBottom: '24px',
});

export const button = style({
  padding: '10px 16px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#111',
  color: '#fff',
  fontSize: '14px',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.9,
  },
});
