import { setTz } from "$utils/time";
import { MatrixClient } from "$types/matrix-sdk";

export const useTimezoneConfigure = (mx: MatrixClient) =>
    (async (): Promise<void> => {
        try {
            const userid = mx.getUserId();
            if (userid) {
                const tz: string = (await mx.getExtendedProfileProperty(
                    userid,
                    "m.tz",
                )) as string;
                if (tz) {
                    setTz(tz);
                }
            }
        } catch (_) {}
    })();
