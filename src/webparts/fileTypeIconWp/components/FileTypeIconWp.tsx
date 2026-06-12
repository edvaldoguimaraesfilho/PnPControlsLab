import * as React from 'react';
import { FileTypeIcon, ApplicationType, IconType, ImageSize } from "@pnp/spfx-controls-react/lib/FileTypeIcon";


const FileTypeIconWp: React.FC= ({}) => {

return (
  <div>
    /* Showing the icons font */
<FileTypeIcon type={IconType.font} application={ApplicationType.Word} />
<FileTypeIcon type={IconType.font} application={ApplicationType.Excel} />
<FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.docx" />
<FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.xslx" />

/* Showing the icon image */
<FileTypeIcon type={IconType.image} application={ApplicationType.Word} /><br/>
<FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.docx" /><br/>

/* Icon image allows three different sizes */
<FileTypeIcon type={IconType.image} size={ImageSize.small} application={ApplicationType.Excel} /><br/>
<FileTypeIcon type={IconType.image} size={ImageSize.medium} application={ApplicationType.Excel} /><br/>
<FileTypeIcon type={IconType.image} size={ImageSize.large} application={ApplicationType.Excel} /><br/>
  </div>
);


}


export default FileTypeIconWp;