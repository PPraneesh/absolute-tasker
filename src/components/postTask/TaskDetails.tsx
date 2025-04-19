"use client";

import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useFileUpload } from "@/hooks/use-file-upload";

export const TaskDetails = () => {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
  const maxFiles = 6;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
    multiple: true,
    maxFiles,
    initialFiles: [],
  });

  return (
    <div>
      <h1 className="text-xl font-semibold text-center">
        Provide more details
      </h1>
      <div className="*:not-first:mt-2">
        <Label>What are the Details?</Label>
        <Textarea placeholder="Write about the task" />
        <p
          className="text-muted-foreground mt-2 text-xs"
          role="region"
          aria-live="polite"
        >
          Please add as many details as you can
        </p>
      </div>
      <div className="pt-4 *:not-first:mt-4">
        <Label className="text-left">Add Images (optional)</Label>

        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          data-files={files.length > 0 || undefined}
          className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload image file"
          />
          {files.length > 0 ? (
            <div className="flex w-full flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate text-sm font-medium">
                  Uploaded Files ({files.length})
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openFileDialog}
                  disabled={files.length >= maxFiles}
                >
                  <UploadIcon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  Add more
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="bg-accent relative aspect-square rounded-md"
                  >
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="size-full rounded-[inherit] object-cover"
                    />
                    <Button
                      onClick={() => removeFile(file.id)}
                      size="icon"
                      className="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
                      aria-label="Remove image"
                    >
                      <XIcon className="size-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <ImageIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Drop your images here
              </p>
              <p className="text-muted-foreground text-xs">
                SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={openFileDialog}
              >
                <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
                Select images
              </Button>
            </div>
          )}
        </div>

        {errors.length > 0 && (
          <div
            className="text-destructive flex items-center gap-1 text-xs"
            role="alert"
          >
            <AlertCircleIcon className="size-3 shrink-0" />
            <span>{errors[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
};
