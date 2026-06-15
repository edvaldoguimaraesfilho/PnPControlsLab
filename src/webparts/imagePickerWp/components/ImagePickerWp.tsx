import * as React from "react";
import { useState, useCallback } from "react";
import { ImagePicker } from "@pnp/spfx-controls-react/lib/ImagePicker";
import { IImagePickerWpProps } from "./IImagePickerWpProps";

const ImagePickerWp: React.FC<IImagePickerWpProps> = (props) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState<string>("");

  const handleFileSelected = useCallback(async (file: any) => {
    console.log("file", file);

    if (file?.fileAbsoluteUrl) {
      setSelectedFileUrl(file.fileAbsoluteUrl);
    }
  }, []);

  const onDeleteFile = useCallback(async () => {
    console.log("onDeleteFile");
    setSelectedFileUrl("undefined");
  }, []);

  return (
    <ImagePicker
      onFileSelected={handleFileSelected}
      onDeleteFile={onDeleteFile}
      selectedFileUrl={selectedFileUrl}   
      context={props.context}
    />
  );
};

export default ImagePickerWp;