// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | DraggableGsapSlice
  | BentoSlice
  | NavbarSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Item in *Bento → Default → Primary → Main Bento*
 */
export interface BentoSliceDefaultPrimaryMainBentoItem {
  /**
   * Image field in *Bento → Default → Primary → Main Bento*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.main_bento[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Bento → Default → Primary → Main Bento*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.main_bento[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Email field in *Bento → Default → Primary → Main Bento*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.main_bento[].email
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email: prismic.LinkField;
}

/**
 * Item in *Bento → Default → Primary → Mutli Join Bento*
 */
export interface BentoSliceDefaultPrimaryMutliJoinBentoItem {
  /**
   * Main Text field in *Bento → Default → Primary → Mutli Join Bento*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.mutli_join_bento[].main_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text: prismic.KeyTextField;

  /**
   * Sub Text field in *Bento → Default → Primary → Mutli Join Bento*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.mutli_join_bento[].sub_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_text: prismic.KeyTextField;

  /**
   * Main Text 2 field in *Bento → Default → Primary → Mutli Join Bento*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.mutli_join_bento[].main_text_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text_2: prismic.KeyTextField;

  /**
   * Sub Text 2 field in *Bento → Default → Primary → Mutli Join Bento*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.mutli_join_bento[].sub_text_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_text_2: prismic.KeyTextField;
}

/**
 * Item in *Bento → Default → Primary → Embed*
 */
export interface BentoSliceDefaultPrimaryEmbedItem {
  /**
   * Image to Show field in *Bento → Default → Primary → Embed*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.embed[].image_to_show
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_to_show: prismic.ImageField<never>;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
  /**
   * Tagline field in *Bento → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Main Bento field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.main_bento[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  main_bento: prismic.GroupField<
    Simplify<BentoSliceDefaultPrimaryMainBentoItem>
  >;

  /**
   * Image bento field in *Bento → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.image_bento
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_bento: prismic.ImageField<never>;

  /**
   * Mutli Join Bento field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.mutli_join_bento[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  mutli_join_bento: prismic.GroupField<
    Simplify<BentoSliceDefaultPrimaryMutliJoinBentoItem>
  >;

  /**
   * Embed field in *Bento → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: bento.default.primary.embed[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  embed: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryEmbedItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BentoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Default variation for DraggableGsap Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DraggableGsapSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *DraggableGsap*
 */
type DraggableGsapSliceVariation = DraggableGsapSliceDefault;

/**
 * DraggableGsap Shared Slice
 *
 * - **API ID**: `draggable_gsap`
 * - **Description**: DraggableGsap
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DraggableGsapSlice = prismic.SharedSlice<
  "draggable_gsap",
  DraggableGsapSliceVariation
>;

/**
 * Item in *Navbar → Default → Primary → Menu*
 */
export interface NavbarSliceDefaultPrimaryMenuItem {
  /**
   * Link field in *Navbar → Default → Primary → Menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.menu[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *Navbar → Default → Primary*
 */
export interface NavbarSliceDefaultPrimary {
  /**
   * Logo field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Menu field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.menu[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu: prismic.GroupField<Simplify<NavbarSliceDefaultPrimaryMenuItem>>;

  /**
   * Call to Action field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.call_to_action
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action: prismic.LinkField;
}

/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavbarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Navbar*
 */
type NavbarSliceVariation = NavbarSliceDefault;

/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: Navbar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSlice = prismic.SharedSlice<"navbar", NavbarSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      BentoSlice,
      BentoSliceDefaultPrimaryMainBentoItem,
      BentoSliceDefaultPrimaryMutliJoinBentoItem,
      BentoSliceDefaultPrimaryEmbedItem,
      BentoSliceDefaultPrimary,
      BentoSliceVariation,
      BentoSliceDefault,
      DraggableGsapSlice,
      DraggableGsapSliceVariation,
      DraggableGsapSliceDefault,
      NavbarSlice,
      NavbarSliceDefaultPrimaryMenuItem,
      NavbarSliceDefaultPrimary,
      NavbarSliceVariation,
      NavbarSliceDefault,
    };
  }
}
