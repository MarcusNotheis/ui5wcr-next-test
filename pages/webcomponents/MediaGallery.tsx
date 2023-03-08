import { MediaGallery, MediaGalleryItem } from "@ui5/webcomponents-react/ssr";

export default function MediaGalleryPage() {
  return (
    <MediaGallery>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
      </MediaGalleryItem>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
      </MediaGalleryItem>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg" />
      </MediaGalleryItem>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1030.jpg" />
      </MediaGalleryItem>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2002.jpg" />
      </MediaGalleryItem>
      <MediaGalleryItem>
        <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2026.jpg" />
      </MediaGalleryItem>
    </MediaGallery>
  );
}
