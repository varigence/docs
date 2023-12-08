import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '42d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '68d'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '998'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'cba'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'b60'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '84f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '0b0'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '45c'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'd43'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'bd4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'f86'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '12a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3e6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '578'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/biml-express',
            component: ComponentCreator('/docs/tags/biml-express', '1a6'),
            exact: true
          },
          {
            path: '/docs/tags/biml-flex',
            component: ComponentCreator('/docs/tags/biml-flex', '583'),
            exact: true
          },
          {
            path: '/docs/tags/biml-language',
            component: ComponentCreator('/docs/tags/biml-language', 'ced'),
            exact: true
          },
          {
            path: '/docs/tags/biml-studio',
            component: ComponentCreator('/docs/tags/biml-studio', '1e0'),
            exact: true
          },
          {
            path: '/docs/tags/conceptual',
            component: ComponentCreator('/docs/tags/conceptual', '8a5'),
            exact: true
          },
          {
            path: '/docs/tags/guidance',
            component: ComponentCreator('/docs/tags/guidance', '937'),
            exact: true
          },
          {
            path: '/docs/tags/reference',
            component: ComponentCreator('/docs/tags/reference', '8ce'),
            exact: true
          },
          {
            path: '/docs/tags/walkthrough',
            component: ComponentCreator('/docs/tags/walkthrough', '335'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '15e'),
            routes: [
              {
                path: '/docs/bimlexpress/',
                component: ComponentCreator('/docs/bimlexpress/', '2e1'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/comparison/',
                component: ComponentCreator('/docs/bimlexpress/comparison/', 'eff'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/comparison/comparing-bimlexpress-bidshelper-bideveloperextensions',
                component: ComponentCreator('/docs/bimlexpress/comparison/comparing-bimlexpress-bidshelper-bideveloperextensions', '592'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/comparison/comparing-bimlexpress-bimlstudio',
                component: ComponentCreator('/docs/bimlexpress/comparison/comparing-bimlexpress-bimlstudio', '314'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/',
                component: ComponentCreator('/docs/bimlexpress/getting-started/', '315'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/add-edit-biml-files',
                component: ComponentCreator('/docs/bimlexpress/getting-started/add-edit-biml-files', 'f44'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/bimlexpress-account',
                component: ComponentCreator('/docs/bimlexpress/getting-started/bimlexpress-account', '1a4'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/generate-ssis-packages',
                component: ComponentCreator('/docs/bimlexpress/getting-started/generate-ssis-packages', '935'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/install-bimlexpress',
                component: ComponentCreator('/docs/bimlexpress/getting-started/install-bimlexpress', '15b'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/menus-options',
                component: ComponentCreator('/docs/bimlexpress/getting-started/menus-options', 'a6f'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/getting-started/preview-expanded-biml',
                component: ComponentCreator('/docs/bimlexpress/getting-started/preview-expanded-biml', '3c8'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/',
                component: ComponentCreator('/docs/bimlexpress/release-notes/', '12b'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/biml-express-2020-features',
                component: ComponentCreator('/docs/bimlexpress/release-notes/biml-express-2020-features', '09a'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/bimlexpress-2017',
                component: ComponentCreator('/docs/bimlexpress/release-notes/bimlexpress-2017', '26f'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/bimlexpress-2018.1',
                component: ComponentCreator('/docs/bimlexpress/release-notes/bimlexpress-2018.1', '19c'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/bimlexpress-2018.2',
                component: ComponentCreator('/docs/bimlexpress/release-notes/bimlexpress-2018.2', '7ed'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/bimlexpress-2018.3',
                component: ComponentCreator('/docs/bimlexpress/release-notes/bimlexpress-2018.3', 'bee'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/BimlExpress-2019.1',
                component: ComponentCreator('/docs/bimlexpress/release-notes/BimlExpress-2019.1', '046'),
                exact: true
              },
              {
                path: '/docs/bimlexpress/release-notes/BimlExpress-2020.1',
                component: ComponentCreator('/docs/bimlexpress/release-notes/BimlExpress-2020.1', '688'),
                exact: true
              },
              {
                path: '/docs/bimlflex/',
                component: ComponentCreator('/docs/bimlflex/', 'bf3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/', '9de'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/build-bimlstudio-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/build-bimlstudio-project', '47e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/command-line-build',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/command-line-build', '765'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/concurrent-development',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/concurrent-development', 'dd4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/continuous-integration-and-delivery',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/continuous-integration-and-delivery', '63a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/generating-ddl',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/generating-ddl', 'a51'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/setup-bimlstudio-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/setup-bimlstudio-project', 'd1d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/build-and-deployment/ssdt-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/ssdt-project', 'fad'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/',
                component: ComponentCreator('/docs/bimlflex/concepts/', 'e4a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/customer',
                component: ComponentCreator('/docs/bimlflex/concepts/customer', '7cc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/delete-detection',
                component: ComponentCreator('/docs/bimlflex/concepts/delete-detection', 'f95'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/extension-points',
                component: ComponentCreator('/docs/bimlflex/concepts/extension-points', '8b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/hashing',
                component: ComponentCreator('/docs/bimlflex/concepts/hashing', 'f9e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/importing-metadata',
                component: ComponentCreator('/docs/bimlflex/concepts/importing-metadata', '8dd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/integration-keys',
                component: ComponentCreator('/docs/bimlflex/concepts/integration-keys', 'f18'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/load-parameters',
                component: ComponentCreator('/docs/bimlflex/concepts/load-parameters', '100'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/model-overrides',
                component: ComponentCreator('/docs/bimlflex/concepts/model-overrides', '9d8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/staged-query',
                component: ComponentCreator('/docs/bimlflex/concepts/staged-query', '915'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/concepts/versions',
                component: ComponentCreator('/docs/bimlflex/concepts/versions', '1d8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/', 'a22'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/data-mart-configuration',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/data-mart-configuration', 'e5f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/data-mart-overrides',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/data-mart-overrides', '2dd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/dimension-pattern',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/dimension-pattern', '042'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/fact-pattern',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/fact-pattern', '189'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/', '01e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault', 'b0e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-best-practices',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-best-practices', 'a96'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-business-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-business-data-vault', 'f1d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-hub',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-hub', '505'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-integration-keys',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-integration-keys', '7b8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-link',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-link', 'fb5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-reference-data',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-reference-data', 'eaa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-satellite',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-satellite', 'd1a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-zero-records',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-zero-records', '0a9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-dimensional-model',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-dimensional-model', 'f37'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-implementation-bridge',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-implementation-bridge', 'ba0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-implementation-pit',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-implementation-pit', 'e69'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-introduction',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-introduction', '21f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/driving-keys-in-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/driving-keys-in-data-vault', '626'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/hashing-in-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/hashing-in-data-vault', '3a1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/microsoft-best-practice-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/microsoft-best-practice-data-vault', '61a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-staging/',
                component: ComponentCreator('/docs/bimlflex/delivering-staging/', '245'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/delivering-staging/persistent-staging-area',
                component: ComponentCreator('/docs/bimlflex/delivering-staging/persistent-staging-area', '1be'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/docs-gen/',
                component: ComponentCreator('/docs/bimlflex/docs-gen/', 'c0a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/',
                component: ComponentCreator('/docs/bimlflex/getting-started/', 'ada'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/bimlflex-components-overview',
                component: ComponentCreator('/docs/bimlflex/getting-started/bimlflex-components-overview', 'a77'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/first-project-walkthrough',
                component: ComponentCreator('/docs/bimlflex/getting-started/first-project-walkthrough', '6f4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/initial-configuration',
                component: ComponentCreator('/docs/bimlflex/getting-started/initial-configuration', '108'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/intro-videos',
                component: ComponentCreator('/docs/bimlflex/getting-started/intro-videos', 'ae2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/getting-started/sample-metadata',
                component: ComponentCreator('/docs/bimlflex/getting-started/sample-metadata', '6f3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/',
                component: ComponentCreator('/docs/bimlflex/installation/', '3e8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/change-excel-bitness-bimlflex',
                component: ComponentCreator('/docs/bimlflex/installation/change-excel-bitness-bimlflex', '4ba'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-bimlcatalog-database',
                component: ComponentCreator('/docs/bimlflex/installation/installing-bimlcatalog-database', 'fd8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-bimlflex',
                component: ComponentCreator('/docs/bimlflex/installation/installing-bimlflex', '467'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-build-server',
                component: ComponentCreator('/docs/bimlflex/installation/installing-build-server', '74e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-developer-tools',
                component: ComponentCreator('/docs/bimlflex/installation/installing-developer-tools', '42f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-metadata-database',
                component: ComponentCreator('/docs/bimlflex/installation/installing-metadata-database', '054'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/installing-ssis-server',
                component: ComponentCreator('/docs/bimlflex/installation/installing-ssis-server', 'aaa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/system-requirements',
                component: ComponentCreator('/docs/bimlflex/installation/system-requirements', '82b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/installation/upgrade-process',
                component: ComponentCreator('/docs/bimlflex/installation/upgrade-process', 'ac0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/accelerator',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/accelerator', 'a5f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/attribute-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/attribute-editor', '7b8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/bimlflex-tour',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/bimlflex-tour', 'c1a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/customers',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/customers', '855'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/dashboard',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/dashboard', '2fe'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/data-lineage',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/data-lineage', 'bad'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/database-settings',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/database-settings', '1fd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/excel-add-in',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/excel-add-in', '983'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/operational-reports',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/operational-reports', '58f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/parameter-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/parameter-editor', '841'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/schema-diagram',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/schema-diagram', '0cb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/setting-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/setting-editor', 'e87'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/metadata-editors/treeview',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/treeview', '13a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/orchestration/',
                component: ComponentCreator('/docs/bimlflex/orchestration/', 'c42'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/orchestration/orchestration-ssis',
                component: ComponentCreator('/docs/bimlflex/orchestration/orchestration-ssis', '5dd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/patterns/source-to-staging-pattern',
                component: ComponentCreator('/docs/bimlflex/patterns/source-to-staging-pattern', 'ba3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/', '2a9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/data-type-conversions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/data-type-conversions', 'dcb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Batch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Batch', 'b06'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Column',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Column', 'be3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Configuration',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Configuration', 'e83'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Connection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Connection', 'd9c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Customer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Customer', '3c0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/DataTypeMapping',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/DataTypeMapping', '3c3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Object',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Object', 'ef5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Parameter',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Parameter', 'f7f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Project',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Project', 'c4b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Setting',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Setting', '7f9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Version',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Version', 'aea'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Batch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Batch', '777'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Connection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Connection', 'eed'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Factory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Factory', '541'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Mart',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Mart', '880'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Vault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Vault', 'dab'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Global',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Global', 'd6c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Mapping-Data-Flows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Mapping-Data-Flows', '065'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Object',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Object', 'f6f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Project',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Project', 'c07'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Staging-Sql',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Staging-Sql', '5b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/metadata-configurations',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/metadata-configurations', '7e5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/metadata-static-values',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/metadata-static-values', '5cf'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-entities-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-entities-index', '3ae'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-extensionpoints-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-extensionpoints-index', '1cf'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-settings-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-settings-index', '788'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/7ZipPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/7ZipPath', '4c9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddRecordSourceToIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddRecordSourceToIntegrationKey', '0c4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddRowHashKeyIndex',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddRowHashKeyIndex', '963'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddSqlDefaults',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddSqlDefaults', 'f15'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendBatchName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendBatchName', '556'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendIntegrationKey', '471'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendLoadFromPsaName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendLoadFromPsaName', '1de'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendNameExternal',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendNameExternal', '285'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendNameLanding',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendNameLanding', 'c17'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendProcedureName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendProcedureName', '637'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendRecordSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendRecordSource', '03f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaDm', '5b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaDv', '599'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaPsa', 'b51'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaStg', '57a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSurrogateKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSurrogateKey', 'fc1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingDv', '9c9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappings', '290'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingStg', '2cc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyExtractConversionInDataFlow',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyExtractConversionInDataFlow', '617'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDm', 'dc0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDv', '5b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyNamingConvention', '58b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchiveImport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchiveImport', '95f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchivePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchivePath', '811'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchiveRetentionPeriod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchiveRetentionPeriod', '7ef'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyCapMbps',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyCapMbps', '378'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyConcurrency',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyConcurrency', 'a31'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyCreateContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyCreateContainer', 'be6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyEnabled',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyEnabled', 'ed3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyLogLevel',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyLogLevel', 'acc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyLogLocation',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyLogLocation', 'a27'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyPath', 'c00'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopySetEnvironmentVariables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopySetEnvironmentVariables', '207'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyUseSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyUseSasToken', '8ec'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyVersion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyVersion', '1b7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountKey', '257'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountName', '0ad'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveContainer', '4e3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveLandingFiles', 'ce4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveSasToken', '6eb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveSourceFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveSourceFiles', '479'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveStage', 'bce'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureBlobStorageDomain',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureBlobStorageDomain', '6ca'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyBehavior',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyBehavior', 'f71'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyDataIntegrationUnits',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyDataIntegrationUnits', '2d1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyEnableLogging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyEnableLogging', '8f3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyEnableStaging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyEnableStaging', '4fa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyIsRecursive',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyIsRecursive', '780'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyLogSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyLogSettings', '61c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyMethod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyMethod', '6b4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyParallelCopies',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyParallelCopies', 'fc1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyRetryAttempts',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyRetryAttempts', '7d9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyRetryInterval',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyRetryInterval', 'd79'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopySecureInput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopySecureInput', 'b9d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopySecureOutput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopySecureOutput', '70d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopySourceSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopySourceSettings', '66e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyStagingSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyStagingSettings', '9cd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyTimeout', 'd6d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyValidateDataConsistency',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyValidateDataConsistency', '6a2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCreateDummyFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCreateDummyFile', '0b3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCreateExternalOnStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCreateExternalOnStage', '936'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDataFactoryLocation',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDataFactoryLocation', '288'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDataFactoryName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDataFactoryName', 'e78'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeleteLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeleteLandingFiles', 'b53'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeleteSourceFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeleteSourceFiles', 'e3b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountKey', '9dc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountName', '6cd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentContainer', 'a1b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentEmitPowerShellCheck',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentEmitPowerShellCheck', 'ca9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentSasToken', '7a1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorAccountKey', '0c9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorAccountName', '452'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorContainer', '9fb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorSasToken', '9e3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureExternalFileConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureExternalFileConversion', '79a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureExternalFileFormat', '85c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileCompressionCodec',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileCompressionCodec', 'de3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileCompressionLevel',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileCompressionLevel', '6b5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileEncodingName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileEncodingName', 'c73'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileNamingConvention', '2fc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileNullValue', '5bb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFolderNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFolderNamingConvention', '909'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKey', 'fac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultName', '55a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecret',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecret', 'cd2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecretVersion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecretVersion', '5a5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeName', '95c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeUseKeyVault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeUseKeyVault', 'f0d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntime',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntime', '0a6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeIsShared',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeIsShared', '701'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeResourceId',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeResourceId', '4f5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureKeyVault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureKeyVault', '429'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureOnErrorLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureOnErrorLandingFiles', '286'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureOnErrorSourceFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureOnErrorSourceFiles', 'b51'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzurePolybaseSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzurePolybaseSettings', 'cab'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureResourceGroup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureResourceGroup', '6ed'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureRoundRobinTemporaryTables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureRoundRobinTemporaryTables', 'b97'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptEnableLogging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptEnableLogging', 'b93'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptExeutionTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptExeutionTimeout', '07f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptLogSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptLogSettings', '48b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptRetryAttempts',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptRetryAttempts', '8de'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptRetryInterval',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptRetryInterval', '324'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptSecureInput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptSecureInput', 'f38'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptSecureOutput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptSecureOutput', '47d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureScriptTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureScriptTimeout', '953'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageAccountKey', '14b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageAccountName', '678'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageContainer', '07e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageOnExtract',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageOnExtract', '9b0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageSasToken', '806'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureSubscriptionId',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureSubscriptionId', 'fe4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmAttributeNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmAttributeNamingConvention', '3ac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmAttributeTechnicalNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmAttributeTechnicalNamingConvention', '8fa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmEntityNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmEntityNamingConvention', 'cac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmEntityTechnicalNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmEntityTechnicalNamingConvention', '03a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmNamingConvention', '08c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmUseShortNames',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmUseShortNames', 'a2c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ChangeReferencesToIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ChangeReferencesToIntegrationKey', '2a2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConfigurationPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConfigurationPath', '446'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeDm', '82a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeDv', '27c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeStg', 'ec2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConvertGuidToString',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConvertGuidToString', '328'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksActivityRetryAttempts',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksActivityRetryAttempts', '580'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksActivityRetryInterval',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksActivityRetryInterval', 'dd1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksActivitySecureInput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksActivitySecureInput', 'd9e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksActivitySecureOutput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksActivitySecureOutput', '5a4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksActivityTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksActivityTimeout', 'c9f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksAddCreateCatalog',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksAddCreateCatalog', 'dc2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksAddDropNotebooks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksAddDropNotebooks', '9f8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksAddSqlComments',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksAddSqlComments', '4dd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksAddTruncateNotebooks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksAddTruncateNotebooks', '2a0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksAppendNotebookName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksAppendNotebookName', 'df3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksCopyFormatOptions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksCopyFormatOptions', '6d4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksCopyOptions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksCopyOptions', '379'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksDataTimeZone',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksDataTimeZone', 'e6b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksDisplayTimeZone',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksDisplayTimeZone', 'b19'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksNotebookPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksNotebookPath', '6d8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksOutputPath', '2bd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksRepositoryName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksRepositoryName', 'de2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksTableProperties',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksTableProperties', '005'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksUseGlobalParameters',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksUseGlobalParameters', '83e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksUseManagedTables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksUseManagedTables', '34f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksUseTemporaryViews',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksUseTemporaryViews', '820'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DatabricksUseUnityCatalog',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DatabricksUseUnityCatalog', '41c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyDv', 'a4b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyPsa', '200'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionArchiveFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionArchiveFiles', '43e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionDeleteFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionDeleteFiles', '0d1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionEnabled',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionEnabled', 'd6c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionOnErrorFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionOnErrorFiles', '927'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionOnStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionOnStage', '047'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteImportFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteImportFile', '098'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteObjectNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteObjectNamePattern', '6b7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteSchemaNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteSchemaNamePattern', '7fb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisableStgPsaOnly',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisableStgPsaOnly', '61f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDm', 'e82'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDv', '3a9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameStg', 'd22'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDm', 'a1f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDv', '389'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameStg', '91d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendDim',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendDim', '51f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendFact',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendFact', '413'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendStaging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendStaging', '7a4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmInferDim',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmInferDim', 'b13'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmStageOnInitialLoad',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmStageOnInitialLoad', 'f2c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationFormItemSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationFormItemSettings', '2e9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationHideEmptyGroups',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationHideEmptyGroups', 'c28'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationHtmlTemplatePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationHtmlTemplatePath', 'd75'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationIncludeConnectionSchemaDiagrams',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationIncludeConnectionSchemaDiagrams', 'f50'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationIncludeObjectLineageDiagrams',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationIncludeObjectLineageDiagrams', '043'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationPreviewHideFooter',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationPreviewHideFooter', '559'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationPreviewHideHeader',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationPreviewHideHeader', '6f4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationPropertyDisplayMode',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationPropertyDisplayMode', '1f5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationPropertyOrder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationPropertyOrder', '342'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DocumentationSensitivePropertyMode',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DocumentationSensitivePropertyMode', '7b0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateCorrectKeyNames',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateCorrectKeyNames', '1bc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateHubKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateHubKeys', '01b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkIntegrationKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkIntegrationKeys', '62f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkKeys', '30c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatellite', '454'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatelliteKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatelliteKeys', '2c4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateShowColumns',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateShowColumns', '3b7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateShowExpanded',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateShowExpanded', 'e28'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateTwoWayLinks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateTwoWayLinks', '319'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAddZeroKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAddZeroKeys', '2f1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendBridge',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendBridge', 'aa2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendHierarchyLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendHierarchyLink', 'de9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendHub',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendHub', '74d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLink', 'def'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatellite', '804'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatelliteRecordSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatelliteRecordSource', 'a43'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendPointInTime',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendPointInTime', 'ab8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendReference',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendReference', 'c78'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendSameAsLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendSameAsLink', '553'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendSatellite', '550'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvBridgeLagDays',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvBridgeLagDays', '125'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvColumnNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvColumnNamingConvention', '4aa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvCreateSatelliteViews',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvCreateSatelliteViews', '3f1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvCurrentViewSuffix',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvCurrentViewSuffix', '15d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvDefaultSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvDefaultSchema', 'f36'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvDeltaIsDerived', '695'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvDeriveStagedObject',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvDeriveStagedObject', '5d5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvEffectivityViewSuffix',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvEffectivityViewSuffix', 'bce'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvEltDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvEltDeltaIsDerived', 'bac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvEndDateSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvEndDateSatellite', 'a9f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvInferLinkHub',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvInferLinkHub', 'b50'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvInsertScriptWithTable',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvInsertScriptWithTable', 'ea4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvNamingConvention', '4aa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvParallelProcessing',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvParallelProcessing', '49a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPitLagDays',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPitLagDays', 'b8e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPrefixSurrogateKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPrefixSurrogateKey', 'dd5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPrefixViewName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPrefixViewName', '1b0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPreviewSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPreviewSchema', '0ce'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvProcessOnStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvProcessOnStage', 'bb3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaBridge',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaBridge', 'b5c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaHub',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaHub', 'a71'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaLink', 'bf3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaLinkSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaLinkSatellite', 'b0f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaPointInTime',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaPointInTime', '1a2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSchemaSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSchemaSatellite', 'ca4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSingleChangeSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSingleChangeSatellite', '2c9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvStageSurrogateKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvStageSurrogateKeys', '0b1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUniformChangeType',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUniformChangeType', '7f6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseCacheLookup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseCacheLookup', '9ec'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseHashKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseHashKeys', 'ec8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseTransactions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseTransactions', '8eb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseWhereExists',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseWhereExists', 'da3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvZeroKeyExpression',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvZeroKeyExpression', '7c8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableEndDatePsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableEndDatePsa', 'dc9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackDv', 'bbb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackPsa', 'c1b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackStg', 'f33'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExportPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExportPath', 'eab'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExtractFileEncoding',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExtractFileEncoding', 'e6d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExtractFileSplitSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExtractFileSplitSize', '48b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/GlobalDefaultDate',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/GlobalDefaultDate', '825'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashAlgorithm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashAlgorithm', '20b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashBinary',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashBinary', '630'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashIntegrationKey', '9c3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashNullValue', 'a32'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HideSecondaryExclusions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HideSecondaryExclusions', '56e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ImportPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ImportPath', '15d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ImportViews',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ImportViews', '79d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/InferIntegrationKeyFrom',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/InferIntegrationKeyFrom', 'daf'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyColumnOrder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyColumnOrder', '6ad'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyConcatenationOrder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyConcatenationOrder', 'c19'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyToUpper',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyToUpper', '4f5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/KeyEndsWith',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/KeyEndsWith', 'eff'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/LookupCachePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/LookupCachePath', 'c89'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/LookupTablePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/LookupTablePattern', '657'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/NetCoreTargetsPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/NetCoreTargetsPath', '830'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ObjectNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ObjectNamePattern', '4bd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PadIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PadIntegrationKey', 'c85'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PersistHistory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PersistHistory', 'a94'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaCollapseRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaCollapseRows', 'e79'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaDetectionSql',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaDetectionSql', 'cb9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaIsDerived', '83e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaLateArriving',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaLateArriving', '72a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaSingleChange',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaSingleChange', '438'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaStageAllRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaStageAllRows', 'cc2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaUseHashDiff',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaUseHashDiff', '864'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaEltDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaEltDeltaIsDerived', '179'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaMergeAllRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaMergeAllRows', 'ef7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaTemporalTableName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaTemporalTableName', 'd62'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaTruncateIfHasRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaTruncateIfHasRows', 'a18'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaUseCacheLookup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaUseCacheLookup', 'e24'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/RetainExistingMetadata',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/RetainExistingMetadata', '66c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/RootPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/RootPath', '409'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SchemaNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SchemaNamePattern', 'faa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SelectBlobRowOrderBy',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SelectBlobRowOrderBy', '96b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SelectStageRowDistinct',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SelectStageRowDistinct', 'b0a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnapshotRetentionPeriod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnapshotRetentionPeriod', 'fe5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowDtCleanOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowDtCleanOutputPath', '38c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowDtOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowDtOutputPath', '606'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeAccount',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeAccount', '529'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeAddSqlComments',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeAddSqlComments', '3ea'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeAutoSuspend',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeAutoSuspend', 'd3d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeDatabase',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeDatabase', '9ac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeExecuteAs',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeExecuteAs', '3c0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeFileFormat', 'c29'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakePassword',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakePassword', '7b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeRegion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeRegion', '19c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeRemoveStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeRemoveStage', '3fe'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDown',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDown', '68d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDownSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDownSize', '11b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUp',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUp', '231'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUpSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUpSize', 'fe8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeSchema', '5af'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeUser',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeUser', '130'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeWarehouse',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeWarehouse', 'bb8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlConfig',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlConfig', '89e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlConnection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlConnection', '5d5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlPath', '725'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SqlCmdOverride',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SqlCmdOverride', '3cc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtCleanOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtCleanOutputPath', '4b5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultCredential',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultCredential', '4a0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalDataSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalDataSource', '868'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalFileFormat', '469'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultMasterKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultMasterKey', '087'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeCredential',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeCredential', '098'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalDataSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalDataSource', 'a46'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalFileFormat', '4e4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalTables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalTables', 'eaa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeMasterKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeMasterKey', '92b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeNetCoreSupport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeNetCoreSupport', '92d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtOutputPath', '4e9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtOverwriteExternalTableDefaults',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtOverwriteExternalTableDefaults', '6f9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtSolutionName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtSolutionName', 'ce8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtSuppressTSqlWarnings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtSuppressTSqlWarnings', '196'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtUseDatabaseReferences',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtUseDatabaseReferences', '05f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtVisualStudioVersion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtVisualStudioVersion', 'afc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisAutoAdjustBufferSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisAutoAdjustBufferSize', 'c82'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisBLOBTempStoragePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisBLOBTempStoragePath', 'ca3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisBufferTempStoragePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisBufferTempStoragePath', 'f7d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCheckConstraints',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCheckConstraints', '1e1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCommandTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCommandTimeout', 'c41'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisConvertDateWithScale',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisConvertDateWithScale', '880'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCreateFolder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCreateFolder', 'd61'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDb',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDb', '849'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferMaxRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferMaxRows', '61d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferSize', '003'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDelayValidation',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDelayValidation', '78f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisEngineThreads',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisEngineThreads', '075'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisExpressUseUTF8DataConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisExpressUseUTF8DataConversion', '590'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisFolder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisFolder', '022'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisHashNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisHashNullValue', '29c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisMaxConcurrentExecutables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisMaxConcurrentExecutables', 'bfe'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisMaximumInsertCommitSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisMaximumInsertCommitSize', '530'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisProcessSubfolders',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisProcessSubfolders', '98d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisRowsPerBatch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisRowsPerBatch', '8f5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisServer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisServer', 'e5a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisValidateExternalMetadata',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisValidateExternalMetadata', 'e84'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageBypassPsaChecks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageBypassPsaChecks', '598'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageColumnWithBusinessName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageColumnWithBusinessName', 'ba4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StagedObjectConfigurations',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StagedObjectConfigurations', '9a4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageObjectWithBusinessName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageObjectWithBusinessName', '6ab'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageReduceLinkKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageReduceLinkKeys', '93e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StringConcatenator',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StringConcatenator', 'c8c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixColumn',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixColumn', 'e31'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixObject',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixObject', 'ba4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseBimlCatalog',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseBimlCatalog', 'e20'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseCustomComponents',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseCustomComponents', '6d2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsAppend',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsAppend', '85c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsSchema', '2f2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleHash',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleHash', '4f4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleRowHash',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleRowHash', '4a1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSsisCompatableDateFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSsisCompatableDateFormat', '966'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseTrueFalseForBoolean',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseTrueFalseForBoolean', '3db'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseTryCastConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseTryCastConversion', '58b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseUserNullAssignment',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseUserNullAssignment', '408'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipArchiveImport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipArchiveImport', '20a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipExtractFileInMemory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipExtractFileInMemory', 'c60'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipOutputFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipOutputFile', '78b'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/',
                component: ComponentCreator('/docs/bimlflex/release-notes/', 'c86'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/',
                component: ComponentCreator('/docs/bimlflex/release-notes/', 'e52'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.1', 'f69'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.2', 'c45'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.3',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.3', 'ec5'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2019.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2019.1', 'fde'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2019.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2019.2', '2c6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2020.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2020.1', '3cb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2022.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2022.1', 'f5d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2018.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2018.1', '3b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2019.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2019.1', '4c4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2020.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2020.1', '3c2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2020.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2020.2', '797'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.1', '774'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.2', '570'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.3',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.3', '1d1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2023.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2023.1', 'dac'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/',
                component: ComponentCreator('/docs/bimlflex/scenarios/', 'e18'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/export-to-file',
                component: ComponentCreator('/docs/bimlflex/scenarios/export-to-file', '466'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/master-data-services',
                component: ComponentCreator('/docs/bimlflex/scenarios/master-data-services', '5d4'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-azure-postgres',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-azure-postgres', '6c0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-cdc',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-cdc', '095'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-excel-plus',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-excel-plus', '093'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-flat-file',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-flat-file', '9d0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-odata',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-odata', '91e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-salesforce-rest-api',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-salesforce-rest-api', 'a4e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/scenarios/source-stored-procedure',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-stored-procedure', 'be2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/',
                component: ComponentCreator('/docs/bimlflex/support/', 'd4f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/check-installed-versions',
                component: ComponentCreator('/docs/bimlflex/support/check-installed-versions', 'd8a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/excel-metadata-addin',
                component: ComponentCreator('/docs/bimlflex/support/excel-metadata-addin', 'e3e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/setting-up-adventureworkslt2012-source-database',
                component: ComponentCreator('/docs/bimlflex/support/setting-up-adventureworkslt2012-source-database', '710'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/support-process',
                component: ComponentCreator('/docs/bimlflex/support/support-process', '739'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/tips-and-tricks',
                component: ComponentCreator('/docs/bimlflex/support/tips-and-tricks', '8e7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/support/troubleshooting-tips',
                component: ComponentCreator('/docs/bimlflex/support/troubleshooting-tips', 'fd2'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/',
                component: ComponentCreator('/docs/bimlflex/technology-adf/', 'e54'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/adf-deployment',
                component: ComponentCreator('/docs/bimlflex/technology-adf/adf-deployment', '7b6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/azure-function-bridge',
                component: ComponentCreator('/docs/bimlflex/technology-adf/azure-function-bridge', '313'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/bfx-arm-templates',
                component: ComponentCreator('/docs/bimlflex/technology-adf/bfx-arm-templates', '6c9'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/continuous-integration-and-continuous-delivery',
                component: ComponentCreator('/docs/bimlflex/technology-adf/continuous-integration-and-continuous-delivery', 'eec'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/create-linked-service-connection',
                component: ComponentCreator('/docs/bimlflex/technology-adf/create-linked-service-connection', 'b64'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/landing-area',
                component: ComponentCreator('/docs/bimlflex/technology-adf/landing-area', '6b3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-azure-mysql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-azure-mysql', 'f31'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-azure-postgresql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-azure-postgresql', '187'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-blob-storage',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-blob-storage', '960'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-datalake-gen-2',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-datalake-gen-2', '5b8'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-mysql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-mysql', '3fe'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-netezza',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-netezza', '735'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-oracle',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-oracle', '83f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-postgresql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-postgresql', 'bfe'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-data-warehouse',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-data-warehouse', '408'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-database',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-database', 'e9d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-server',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-server', '047'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sqlmi',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sqlmi', '125'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-teradata',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-teradata', '814'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-azure-key-vault',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-azure-key-vault', '590'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-snowflake',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-snowflake', '1bb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/project-batch-structure-in-adf',
                component: ComponentCreator('/docs/bimlflex/technology-adf/project-batch-structure-in-adf', '9d0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/sensitive-info-management',
                component: ComponentCreator('/docs/bimlflex/technology-adf/sensitive-info-management', '916'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/using-azure-portal',
                component: ComponentCreator('/docs/bimlflex/technology-adf/using-azure-portal', '716'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-adf/using-powershell',
                component: ComponentCreator('/docs/bimlflex/technology-adf/using-powershell', 'bdf'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-data-flow/',
                component: ComponentCreator('/docs/bimlflex/technology-data-flow/', 'adb'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-delta-lake/',
                component: ComponentCreator('/docs/bimlflex/technology-delta-lake/', '348'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-delta-lake/delta-vault',
                component: ComponentCreator('/docs/bimlflex/technology-delta-lake/delta-vault', 'f94'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-snowflake/',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/', '08e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-snowflake/implementing-snowflake-in-adf',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/implementing-snowflake-in-adf', '779'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-snowflake/snowflake-configuration',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/snowflake-configuration', 'db6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-snowflake/unsupported-snowflake-features',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/unsupported-snowflake-features', 'dea'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-sql-server/',
                component: ComponentCreator('/docs/bimlflex/technology-sql-server/', '754'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/', '1a1'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/concurrent-development',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/concurrent-development', '94a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/continuous-integration-and-continuous-delivery',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/continuous-integration-and-continuous-delivery', 'b92'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/sensitive-info-management',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/sensitive-info-management', '1e0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-custom-components',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-custom-components', 'ffa'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-deployment',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-deployment', 'dae'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-deployment-wizard',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-deployment-wizard', '6f3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-on-prem-sql-server',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-on-prem-sql-server', '137'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-server-installation',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-server-installation', 'c06'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-ssis/using-powershell',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/using-powershell', '1ed'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-synapse/',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/', 'db0'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-synapse/synapse-forward-only-approach',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/synapse-forward-only-approach', 'd40'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/technology-synapse/synapse-implementation',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/synapse-implementation', 'a30'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/training/',
                component: ComponentCreator('/docs/bimlflex/training/', '558'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlflex/training/training-content',
                component: ComponentCreator('/docs/bimlflex/training/training-content', '351'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/bimlstudio/',
                component: ComponentCreator('/docs/bimlstudio/', '05c'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/', '399'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/adding-existing-files-to-a-project',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/adding-existing-files-to-a-project', 'a47'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/building-the-example-project',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/building-the-example-project', '123'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-basic-table',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-basic-table', '24c'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-dimension-table',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-dimension-table', '19e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-fact-table',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-fact-table', '6cb'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-connection',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-connection', 'a81'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-database',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-database', '2de'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-project',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-project', 'df3'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-schema',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/creating-a-new-schema', 'd8f'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/deploying-tables-to-sql',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/deploying-tables-to-sql', '45d'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/importing-from-the-sample-database',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/importing-from-the-sample-database', '1c8'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/preparing-to-build-the-example-project',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/preparing-to-build-the-example-project', 'c29'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/saving-a-project',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/saving-a-project', '181'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/adventureworks-lt-walkthrough/setting-up-for-the-sample',
                component: ComponentCreator('/docs/bimlstudio/adventureworks-lt-walkthrough/setting-up-for-the-sample', 'c1d'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/', '999'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/biml-compiler-command-line-options',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/biml-compiler-command-line-options', '8aa'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/choose-the-right-script-mode',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/choose-the-right-script-mode', '90f'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/configuring-project-settings',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/configuring-project-settings', '6d1'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/create-an-expandable-transformer',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/create-an-expandable-transformer', 'da2'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/creating-a-basic-package',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/creating-a-basic-package', '85b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/importing-tables-using-bimlscript',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/importing-tables-using-bimlscript', 'dcd'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/project-view-idiosyncrasies',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/project-view-idiosyncrasies', '988'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/source-control-setup',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/source-control-setup', '68d'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/switching-build-types-for-biml-files',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/switching-build-types-for-biml-files', '97b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/miscellaneous/using-configuration-files',
                component: ComponentCreator('/docs/bimlstudio/miscellaneous/using-configuration-files', '862'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/promotions/bs-adf-feature-promotions',
                component: ComponentCreator('/docs/bimlstudio/promotions/bs-adf-feature-promotions', '374'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/',
                component: ComponentCreator('/docs/bimlstudio/release-notes/', '715'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2017',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2017', 'c5b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2018.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2018.1', 'b8e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2018.2',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2018.2', 'd03'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2018.3',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2018.3', 'cc7'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2019.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2019.1', '71f'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/BimlStudio-2020.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/BimlStudio-2020.1', '348'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2020.2',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2020.2', 'e90'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2022.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2022.1', '77f'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2022.2',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2022.2', '1c0'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2022.3',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2022.3', 'e6e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/bimlstudio-2023.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/bimlstudio-2023.1', '907'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-2.0',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-2.0', '0ff'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-3.0',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-3.0', '826'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-3.1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-3.1', '842'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-3.2',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-3.2', 'a01'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-3.3',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-3.3', 'a1b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-3.4',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-3.4', 'a44'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-4.0',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-4.0', '73c'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/release-notes/mist-4.0-update-1',
                component: ComponentCreator('/docs/bimlstudio/release-notes/mist-4.0-update-1', '873'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/', 'f63'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/action',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/action', '23e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/aggregation-design',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/aggregation-design', '634'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/biml',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/biml', '49b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/bimlscript',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/bimlscript', 'a86'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/calculation',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/calculation', 'f7a'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/common-tool-windows',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/common-tool-windows', 'ee4'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/connection',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/connection', '005'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/cube',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/cube', 'a36'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/file-format',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/file-format', 'd7f'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/kpi',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/kpi', 'e7c'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/package',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/package', '74e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/package-tool-windows',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/package-tool-windows', '37e'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/partition',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/partition', '395'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/perspective',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/perspective', '84d'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/principal',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/principal', '5c7'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/schema',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/schema', '1ca'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/script-project',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/script-project', 'c1b'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/static-source',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/static-source', '7c0'),
                exact: true
              },
              {
                path: '/docs/bimlstudio/visual-editors/table',
                component: ComponentCreator('/docs/bimlstudio/visual-editors/table', '52b'),
                exact: true
              },
              {
                path: '/docs/category/bimlflex-app',
                component: ComponentCreator('/docs/category/bimlflex-app', 'e1d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/bimlflex-for-azure-data-factory',
                component: ComponentCreator('/docs/category/bimlflex-for-azure-data-factory', '94c'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/bimlflex-for-mapping-data-flows',
                component: ComponentCreator('/docs/category/bimlflex-for-mapping-data-flows', '765'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/bimlflex-for-sql-server-integration-services',
                component: ComponentCreator('/docs/category/bimlflex-for-sql-server-integration-services', 'f42'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/bimlflex-on-snowflake',
                component: ComponentCreator('/docs/category/bimlflex-on-snowflake', 'b3f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/bimlflex-on-synapse',
                component: ComponentCreator('/docs/category/bimlflex-on-synapse', '6cc'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/delivering-data-marts',
                component: ComponentCreator('/docs/category/delivering-data-marts', 'fb6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/delivering-data-vault',
                component: ComponentCreator('/docs/category/delivering-data-vault', 'd68'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/delivering-staging',
                component: ComponentCreator('/docs/category/delivering-staging', 'd07'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/development-build--deployment',
                component: ComponentCreator('/docs/category/development-build--deployment', '51d'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', 'ec6'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/installation',
                component: ComponentCreator('/docs/category/installation', '6d7'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/key-concepts-and-features',
                component: ComponentCreator('/docs/category/key-concepts-and-features', '77a'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/orchestration',
                component: ComponentCreator('/docs/category/orchestration', '910'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/other-bimlflex-connectivity',
                component: ComponentCreator('/docs/category/other-bimlflex-connectivity', 'a2f'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/reference-docs',
                component: ComponentCreator('/docs/category/reference-docs', 'ec3'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/release-notes',
                component: ComponentCreator('/docs/category/release-notes', 'd5e'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/support-guide',
                component: ComponentCreator('/docs/category/support-guide', '4bd'),
                exact: true,
                sidebar: "bimlflexSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/intro',
                component: ComponentCreator('/docs/tutorial/intro', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/congratulations', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-blog-post', 'b54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-document', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-page', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/deploy-your-site', 'e64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/markdown-features', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/manage-docs-versions', '8b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/translate-your-site', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cb3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
