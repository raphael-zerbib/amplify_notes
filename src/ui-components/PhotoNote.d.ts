/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
import { NoteUIProps } from "./NoteUI";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhotoNoteOverridesProps = {
    PhotoNote?: PrimitiveOverrideProps<FlexProps>;
    "IMG-1054 1"?: PrimitiveOverrideProps<ImageProps>;
    PhotoNote31472751?: NoteUIProps;
} & EscapeHatchProps;
export declare type PhotoNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PhotoNoteOverridesProps | undefined | null;
}>;
export default function PhotoNote(props: PhotoNoteProps): React.ReactElement;
