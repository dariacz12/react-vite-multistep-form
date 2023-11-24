import FormWrapper from "./FormWrapper";
type AdresData = {
  street: string;
  city: string;
  zip: string;
};

type AdresFormProps = AdresData & {
  updateFields: (fields: Partial<AdresData>) => void;
};

const AdresForm = ({ street, city, zip, updateFields }: AdresFormProps) => {
  return (
    <FormWrapper title="Adres Details">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AdresForm;
