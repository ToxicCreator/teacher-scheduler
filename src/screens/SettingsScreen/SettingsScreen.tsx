import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/system";
import styles from "./SettingsScreen.module.css";


const mockOptions = [
  "Русаков А.М.",
  "Филатов В.В.",
  "Горин Д.С."
];

function SettingsScreen() {
  return (
    <section className={styles.root}>
      <Stack>
        <h1>Настройки</h1>
        <Autocomplete
          freeSolo
          options={mockOptions}
          renderInput={(params) => (
            <TextField {...params} label="ФИО преподавателя" />
          )}
        />
      </Stack>
    </section>
  );
}

export default SettingsScreen;
