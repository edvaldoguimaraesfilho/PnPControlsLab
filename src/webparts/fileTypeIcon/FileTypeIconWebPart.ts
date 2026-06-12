import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './FileTypeIconWebPart.module.scss';

export interface IFileTypeIconWebPartProps {
}

export default class FileTypeIconWebPart extends BaseClientSideWebPart<IFileTypeIconWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.fileTypeIcon }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
