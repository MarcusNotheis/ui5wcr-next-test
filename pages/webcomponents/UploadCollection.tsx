import {
  Icon,
  UploadCollection,
  UploadCollectionItem,
} from "@ui5/webcomponents-react/ssr";

export default function UploadCollectionPage() {
  return (
    <UploadCollection>
      <UploadCollectionItem
        fileName="file-name.txt"
        thumbnail={<Icon name="document" />}
      >
        UploadCollectionItem
      </UploadCollectionItem>
    </UploadCollection>
  );
}
