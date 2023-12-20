import React from "react";
import { Button, Select, Stack } from "@chakra-ui/react";
import styles from './index.module.css';

function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Təşkilatı seçin</h1>
      <p className={styles.subTitle}>
        Qeydiyyatdan keçirmək istədiyiniz şirkəti seçməniz xahiş olunur
      </p>

      <div className={styles.selectContainer}>
        <Stack spacing={3}>
          <Select size="md">
            <option>Teşkilatın adı</option>
          </Select>
        </Stack>
      </div>

      <div className={styles.buttonContainer}>
        <Button colorScheme="blue">Davam et </Button>

        <Button
          size="md"
          height="42px"
          width="500px"
          border="2px"
          borderColor="transparent"
        >
          İmtina et
        </Button>
      </div>
    </div>
  );
}
export default Page;
