import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const BASES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const styles = {
  base: {
    [BASES.PRIMARY]: css`
      border: 1px solid var(--border-color);
      background: var(--primary-background-color);
    `,

    [BASES.SECONDARY]: css`
      background: var(--color-white);

      .dark-mode & {
        background: var(--color-dark-100);
      }
    `,
  },
  interactive: {
    [BASES.PRIMARY]: css`
      &:hover {
        border-color: var(--border-hover-color);
      }
    `,
  },
};

const Surface = styled.div`
  border-radius: 4px;
  box-shadow: 0 0.24905px 0.55345px rgba(0, 0, 0, 0.00562291),
    0 0.59851px 1.33002px rgba(0, 0, 0, 0.00807786),
    0 1.12694px 2.50431px rgba(0, 0, 0, 0.01),
    0 2.01027px 4.46726px rgba(0, 0, 0, 0.0119221),
    0 3.75998px 8.35552px rgba(0, 0, 0, 0.0143771),
    0 9px 20px rgba(0, 0, 0, 0.02);

  .dark-mode & {
    box-shadow: 0 1.66035px 2.10311px rgba(3, 15, 16, 0.0393604),
      0 3.99006px 5.05408px rgba(3, 15, 16, 0.056545),
      0 7.51293px 9.51638px rgba(3, 15, 16, 0.07),
      0 13.4018px 16.9756px rgba(3, 15, 16, 0.083455),
      0 25.0666px 31.751px rgba(3, 15, 16, 0.10064),
      0 60px 76px rgba(3, 15, 16, 0.14);
  }

  ${({ base }) => styles.base[base]};

  ${({ base, interactive }) =>
    interactive &&
    css`
      cursor: pointer;
      transition: transform 0.15s ease-out, border-color 0.15s ease-out;

      &:hover {
        transform: translateY(-2px);
      }

      ${styles.interactive[base]}
    `}
`;

Surface.propTypes = {
  base: PropTypes.oneOf(Object.values(BASES)).isRequired,
  interactive: PropTypes.bool,
};

Surface.defaultProps = {
  interactive: false,
};

Surface.BASE = BASES;

export default Surface;
