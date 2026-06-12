import * as React from 'react';
import styles from './AnimatedDialog.module.scss';
import type { IAnimatedDialogProps } from './IAnimatedDialogProps';

import { AnimatedDialog } from '@pnp/spfx-controls-react/lib/AnimatedDialog';

import {
  DefaultButton,
  DialogFooter,
  DialogType,
  PrimaryButton
} from '@fluentui/react';

export interface IAnimatedDialogState {
  showAnimatedDialog: boolean;
}

export default class AnimatedDialogDemo extends React.Component<IAnimatedDialogProps, IAnimatedDialogState> {

  public constructor(props: IAnimatedDialogProps) {
    super(props);

    this.state = {
      showAnimatedDialog: false
    };
  }

  public render(): React.ReactElement<IAnimatedDialogProps> {

    const animatedDialogContentProps = {
      type: DialogType.normal,
      title: 'Animated Dialog',
      subText: 'Do you like the animated dialog?'
    };

    const animatedModalProps = {
      isDarkOverlay: true
    };

    return (
      <section className={styles.animatedDialog}>
        <div className={styles.container}>

          <h2>WP04 - AnimatedDialog</h2>

          <p>
            Demonstration of the PnP AnimatedDialog control.
          </p>

          <PrimaryButton
            text="Open Animated Dialog"
            onClick={() => {
              this.setState({ showAnimatedDialog: true });
            }}
          />

          <AnimatedDialog
            hidden={!this.state.showAnimatedDialog}
            onDismiss={() => {
              this.setState({ showAnimatedDialog: false });
            }}
            dialogContentProps={animatedDialogContentProps}
            modalProps={animatedModalProps}
          >
            <DialogFooter>
              <PrimaryButton
                text="Yes"
                onClick={() => {
                  this.setState({ showAnimatedDialog: false });
                }}
              />

              <DefaultButton
                text="No"
                onClick={() => {
                  this.setState({ showAnimatedDialog: false });
                }}
              />
            </DialogFooter>
          </AnimatedDialog>

        </div>
      </section>
    );
  }
}