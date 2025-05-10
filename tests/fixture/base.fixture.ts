import { test as base } from '@playwright/test';
import { AddRemoveElementsPage } from '../page-objects/add-remove-elements.page';
import { BasePage } from '../page-objects/base.page';
import { CheckboxesPage } from '../page-objects/checkboxes.page';
import { DragAndDropPage } from '../page-objects/drag-and-drop.page';
import { DropdownListPage } from '../page-objects/dropdown-list.page';
import { DynamicLoadingPage } from '../page-objects/dynamic_loading.page';
import { ExitIntentPage } from '../page-objects/exit_intent.page';
import { FileDownloaderPage } from '../page-objects/file_download.page';
import { FileUploaderPage } from '../page-objects/file_upload.page';
import { IFramePage, NestedFramePage } from '../page-objects/frame.page';
import { GeolocationPage } from '../page-objects/geolocation.page';
import { HorizontalSliderPage } from '../page-objects/horizontal_slider.page';
import { HoversPage } from '../page-objects/hovers.page';
import { MultipleWindowsPage } from '../page-objects/multiple_window.page';
import { StatusCodesPage } from '../page-objects/status-codes.page';

type BaseFixture = {
  basePage: BasePage;
  addRemoveElementsPage: AddRemoveElementsPage;
  checkboxPage: CheckboxesPage;
  dragAndDropPage: DragAndDropPage;
  dropdownListPage: DropdownListPage;
  dynamicLoadingPage: DynamicLoadingPage;
  exitIntentPage: ExitIntentPage;
  fileDownloaderPage: FileDownloaderPage;
  fileUploaderPage: FileUploaderPage;
  nestedFramePage: NestedFramePage;
  iFramePage: IFramePage;
  geolocationPage: GeolocationPage;
  horizontalSliderPage: HorizontalSliderPage;
  hoversPage: HoversPage;
  multipleWindowsPage: MultipleWindowsPage;
  statusCodesPage: StatusCodesPage;
};

export const test = base.extend<BaseFixture>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  addRemoveElementsPage: async ({ page, basePage }, use) => {
    await use(new AddRemoveElementsPage(page, basePage));
  },
  checkboxPage: async ({ page, basePage }, use) => {
    await use(new CheckboxesPage(page, basePage));
  },
  dragAndDropPage: async ({ page, basePage }, use) => {
    await use(new DragAndDropPage(page, basePage));
  },
  dropdownListPage: async ({ page, basePage }, use) => {
    await use(new DropdownListPage(page, basePage));
  },
  dynamicLoadingPage: async ({ page, basePage }, use) => {
    await use(new DynamicLoadingPage(page, basePage));
  },
  exitIntentPage: async ({ page, basePage }, use) => {
    await use(new ExitIntentPage(page, basePage));
  },
  fileDownloaderPage: async ({ page, basePage }, use) => {
    await use(new FileDownloaderPage(page, basePage));
  },
  fileUploaderPage: async ({ page, basePage }, use) => {
    await use(new FileUploaderPage(page, basePage));
  },
  nestedFramePage: async ({ page, basePage }, use) => {
    await use(new NestedFramePage(page, basePage));
  },
  iFramePage: async ({ page, basePage }, use) => {
    await use(new IFramePage(page, basePage));
  },
  geolocationPage: async ({ page, basePage }, use) => {
    await use(new GeolocationPage(page, basePage));
  },
  horizontalSliderPage: async ({ page, basePage }, use) => {
    await use(new HorizontalSliderPage(page, basePage));
  },
  hoversPage: async ({ page, basePage }, use) => {
    await use(new HoversPage(page, basePage));
  },
  multipleWindowsPage: async ({ page, basePage }, use) => {
    await use(new MultipleWindowsPage(page, basePage));
  },
  statusCodesPage: async ({ page, basePage }, use) => {
    await use(new StatusCodesPage(page, basePage));
  },
});

export { expect } from '@playwright/test';
