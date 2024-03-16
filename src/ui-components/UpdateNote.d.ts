/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Note } from "../models";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UpdateNoteOverridesProps = {
    UpdateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField31602478?: PrimitiveOverrideProps<TextFieldProps>;
    TextField31602471?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: Note;
} & {
    overrides?: UpdateNoteOverridesProps | undefined | null;
}>;
export default function UpdateNote(props: UpdateNoteProps): React.ReactElement;
