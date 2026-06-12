import * as React from 'react'
import { useState } from 'react';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';

interface IFilePickerCtrProps {context:any}



const FilePickerCtr:React.FC<IFilePickerCtrProps>=({context})=>{

const [filePickerResult, setState] = useState<IFilePickerResult[]>([]);

return(
<FilePicker
  
  accepts= {[".gif", ".jpg", ".jpeg", ".bmp", ".dib", ".tif", ".tiff", ".ico", ".png", ".jxr", ".svg"]}
  buttonIcon="FileImage"
  onSave={(filePickerResult: IFilePickerResult[]) => { setState(filePickerResult) }}
  onChange={(filePickerResult: IFilePickerResult[]) => { setState(filePickerResult) }}
  context={context}
/>



)



}

export default FilePickerCtr;