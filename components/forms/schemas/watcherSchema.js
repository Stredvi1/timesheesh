import * as Yup from "yup";

export const WatcherScheme = Yup.object().shape({
    watcher: Yup.number()
        .required('Sledující je povinný údaj')
});