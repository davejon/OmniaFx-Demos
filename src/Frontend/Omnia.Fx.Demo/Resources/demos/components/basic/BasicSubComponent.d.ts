import * as tsx from "vue-tsx-support";
export interface BasicSubComponentProps {
    subtext: string;
    another: string;
}
export interface BasicSubComponentEvents {
    onOk: void;
    onError: {
        code: number;
        detail: string;
    };
}
export interface BasicSubComponentScopedSlots {
    default: {
        text: string;
    };
}
export default class BasicSubComponent extends tsx.Component<BasicSubComponentProps, BasicSubComponentEvents, BasicSubComponentScopedSlots> {
    subtext: string;
    another: string;
    mounted(): void;
    render(h: any): any;
}
