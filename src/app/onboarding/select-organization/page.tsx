import React from "react";
import { Button, Select, Stack } from "@chakra-ui/react";
import "../../globals.css";

function Page() {
  return (
    <div className="container">
      <h1 className="title">Təşkilatı seçin</h1>
      <p className="subTitle">
        Qeydiyyatdan keçirmək istədiyiniz şirkəti seçməniz xahiş olunur
      </p>

      <div className="selectContainer">
        <Stack spacing={3}>
          <Select size="md">
            <option value="option1" className="option_first">
              <div >Teşkilatın adı</div>
              <div>Teşkiilatın VÖEN-i</div>
            </option>
          </Select>
        </Stack>
      </div>

      <div className="buttonContainer">
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
