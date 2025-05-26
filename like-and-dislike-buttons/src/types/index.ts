import { ReactionButtonsProps } from '../components/ReactionButtons';

/**
 * Common props for reaction button components (Like/Dislike)
 * Omits label, classNames, buttonClassName, and counterClassName as they are provided by the specific components
 */
export type ReactionButtonTypeProps = Omit<
  ReactionButtonsProps,
  'label' | 'classNames' | 'buttonClassName' | 'counterClassName'
>;
