import React from 'react';
import classnames from 'classnames';

export interface ReactionButtonsProps {
  /**
   * Click event handler for the button
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Additional class names to be applied to the button
   */
  classNames?: string;

  /**
   * The current number to display
   */
  currentNumber: number;

  /**
   * The label for the button
   */
  label: string;

  /**
   * Class name for the counter span
   */
  counterClassName?: string;

  /**
   * Whether the button is in toggle state
   */
  isToggle?: boolean;

  /**
   * Class name to apply when button is toggled
   */
  buttonClassName?: string;

  /**
   * Class name to apply when button is toggled
   */
  activeButtonClassName?: string;
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({
  classNames,
  currentNumber,
  label,
  counterClassName,
  isToggle,
  buttonClassName,
  activeButtonClassName,
  onClick,
}) => {
  return (
    <button
      className={classnames(classNames, buttonClassName, { [activeButtonClassName || '']: isToggle })}
      onClick={onClick}
    >
      {label}
      <span> | </span>
      <span className={counterClassName}>{currentNumber}</span>
    </button>
  );
};

export default ReactionButtons;
