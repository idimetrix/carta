export { default as AlertModal, IAlertProps, IAlertAction } from './AlertModal';
export { default as ConfirmModal, IConfirmProps, IConfirmAction } from './ConfirmModal';
export { default as PromptModal, IPromptProps, IPromptAction } from './PromptModal';
export { default as FormModal, IFormProps, IFormAction } from './FormModal';
export { default as ComponentModal, IComponentProps, IComponentAction } from './ComponentModal';
export { default as UserModal, IUserProps, IUserAction } from './UserModal';

export { default as AccessModal, IAccessProps, IAccessAction } from './AccessModal';

export { default as ChallengeModal, IChallengeProps, IChallengeAction } from './ChallengeModal';


export type IModalType = 'alert' | 'confirm' | 'prompt' | 'form' | 'access' | 'challenge' | 'component' | 'user';
