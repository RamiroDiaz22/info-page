import dayjs from "dayjs";
import "dayjs/locale/es"; // Importa el locale español
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

// Registra los plugins que necesites
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

// Configura español como idioma predeterminado
dayjs.locale("es");

export default dayjs;
