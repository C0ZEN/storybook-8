import { EUiBadgeStyle } from './enums/ui-badge-style.enum';
import { EUiComponentsDataTestId } from '../enums/ui-components-data-test-id.enum';
import { Badge } from 'primereact/badge';
import { classNames } from 'primereact/utils';
import React, { useMemo } from 'react';
import './ui-badge.component.scss';

interface IProps {
  readonly label?: string | number;
  /**
   * @default false
   */
  readonly isInnerOverlay?: boolean;
  readonly innerOverlayClassName?: string;
  /**
   * @default {@link EUiBadgeStyle#PRIMARY}
   */
  readonly style?: EUiBadgeStyle;
}

export function UiBadge({
  label,
  isInnerOverlay = false,
  innerOverlayClassName,
  style = EUiBadgeStyle.PRIMARY,
}: IProps): React.JSX.Element {
  return useMemo(
    (): React.JSX.Element => (
      <Badge
        data-testid={EUiComponentsDataTestId.BADGE}
        value={label}
        severity={style === EUiBadgeStyle.PRIMARY ? undefined : style}
        pt={{
          root: {
            className: isInnerOverlay ? classNames(`ui-badge--inner-overlay`, innerOverlayClassName) : ``,
          },
        }}></Badge>
    ),
    [label, style, isInnerOverlay, innerOverlayClassName],
  );
}
