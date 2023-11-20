import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bc3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '17b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '182'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '738'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '046'),
    exact: true
  },
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
    component: ComponentCreator('/docs', '389'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3e7'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/biml-flex',
            component: ComponentCreator('/docs/tags/biml-flex', '583'),
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
            component: ComponentCreator('/docs', 'a53'),
            routes: [
              {
                path: '/docs/bimlflex/',
                component: ComponentCreator('/docs/bimlflex/', '516'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/', '99d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/build-bimlstudio-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/build-bimlstudio-project', '0af'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/command-line-build',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/command-line-build', 'aef'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/concurrent-development',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/concurrent-development', 'fa5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/continuous-integration-and-delivery',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/continuous-integration-and-delivery', '4dc'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/generating-ddl',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/generating-ddl', 'd7b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/setup-bimlstudio-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/setup-bimlstudio-project', '37b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/build-and-deployment/ssdt-project',
                component: ComponentCreator('/docs/bimlflex/build-and-deployment/ssdt-project', '294'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/',
                component: ComponentCreator('/docs/bimlflex/concepts/', '57d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/customer',
                component: ComponentCreator('/docs/bimlflex/concepts/customer', 'e45'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/delete-detection',
                component: ComponentCreator('/docs/bimlflex/concepts/delete-detection', '582'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/extension-points',
                component: ComponentCreator('/docs/bimlflex/concepts/extension-points', '9fe'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/hashing',
                component: ComponentCreator('/docs/bimlflex/concepts/hashing', 'a0c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/importing-metadata',
                component: ComponentCreator('/docs/bimlflex/concepts/importing-metadata', '2ae'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/integration-keys',
                component: ComponentCreator('/docs/bimlflex/concepts/integration-keys', '2f1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/load-parameters',
                component: ComponentCreator('/docs/bimlflex/concepts/load-parameters', '219'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/model-overrides',
                component: ComponentCreator('/docs/bimlflex/concepts/model-overrides', '9d6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/staged-query',
                component: ComponentCreator('/docs/bimlflex/concepts/staged-query', '920'),
                exact: true
              },
              {
                path: '/docs/bimlflex/concepts/versions',
                component: ComponentCreator('/docs/bimlflex/concepts/versions', 'c8f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/', '9fa'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/data-mart-configuration',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/data-mart-configuration', 'b7a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/data-mart-overrides',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/data-mart-overrides', '256'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/dimension-pattern',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/dimension-pattern', '0e5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-marts/fact-pattern',
                component: ComponentCreator('/docs/bimlflex/delivering-data-marts/fact-pattern', '1ab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/', '489'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault', '959'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-best-practices',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-best-practices', '07f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-business-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-business-data-vault', '3a8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-hub',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-hub', '047'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-integration-keys',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-integration-keys', 'f4e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-link',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-link', 'd45'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-reference-data',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-reference-data', 'c79'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-satellite',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-satellite', '66c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-concept-zero-records',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-concept-zero-records', 'e3c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-dimensional-model',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-dimensional-model', '020'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-implementation-bridge',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-implementation-bridge', '02d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-implementation-pit',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-implementation-pit', 'cbf'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/data-vault-introduction',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/data-vault-introduction', 'e4d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/driving-keys-in-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/driving-keys-in-data-vault', '8a4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/hashing-in-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/hashing-in-data-vault', 'b18'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-data-vault/microsoft-best-practice-data-vault',
                component: ComponentCreator('/docs/bimlflex/delivering-data-vault/microsoft-best-practice-data-vault', '54b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-staging/',
                component: ComponentCreator('/docs/bimlflex/delivering-staging/', '008'),
                exact: true
              },
              {
                path: '/docs/bimlflex/delivering-staging/persistent-staging-area',
                component: ComponentCreator('/docs/bimlflex/delivering-staging/persistent-staging-area', '2ca'),
                exact: true
              },
              {
                path: '/docs/bimlflex/docs-gen/',
                component: ComponentCreator('/docs/bimlflex/docs-gen/', '586'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/',
                component: ComponentCreator('/docs/bimlflex/getting-started/', 'a23'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/bimlflex-components-overview',
                component: ComponentCreator('/docs/bimlflex/getting-started/bimlflex-components-overview', '25c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/first-project-walkthrough',
                component: ComponentCreator('/docs/bimlflex/getting-started/first-project-walkthrough', 'cde'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/initial-configuration',
                component: ComponentCreator('/docs/bimlflex/getting-started/initial-configuration', '4eb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/intro-videos',
                component: ComponentCreator('/docs/bimlflex/getting-started/intro-videos', '10d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/getting-started/sample-metadata',
                component: ComponentCreator('/docs/bimlflex/getting-started/sample-metadata', 'b30'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/',
                component: ComponentCreator('/docs/bimlflex/installation/', 'f32'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/change-excel-bitness-bimlflex',
                component: ComponentCreator('/docs/bimlflex/installation/change-excel-bitness-bimlflex', 'c1b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-bimlcatalog-database',
                component: ComponentCreator('/docs/bimlflex/installation/installing-bimlcatalog-database', '819'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-bimlflex',
                component: ComponentCreator('/docs/bimlflex/installation/installing-bimlflex', '741'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-build-server',
                component: ComponentCreator('/docs/bimlflex/installation/installing-build-server', 'e5a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-developer-tools',
                component: ComponentCreator('/docs/bimlflex/installation/installing-developer-tools', '040'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-metadata-database',
                component: ComponentCreator('/docs/bimlflex/installation/installing-metadata-database', 'd8f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/installing-ssis-server',
                component: ComponentCreator('/docs/bimlflex/installation/installing-ssis-server', '85a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/system-requirements',
                component: ComponentCreator('/docs/bimlflex/installation/system-requirements', 'eab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/installation/upgrade-process',
                component: ComponentCreator('/docs/bimlflex/installation/upgrade-process', '652'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/', '0a3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/accelerator',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/accelerator', 'f4b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/attribute-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/attribute-editor', '5a1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/batches',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/batches', '146'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/bimlflex-tour',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/bimlflex-tour', 'be1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/business-modeling',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/business-modeling', '9b6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/column-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/column-editor', '20c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/configuration-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/configuration-editor', '1a0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/connection-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/connection-editor', '729'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/customers',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/customers', 'aa3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/dashboard',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/dashboard', '13a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/data-lineage',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/data-lineage', '622'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/data-type-mappings',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/data-type-mappings', '296'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/database-settings',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/database-settings', 'df0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/excel-add-in',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/excel-add-in', 'd4a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/object-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/object-editor', '978'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/operational-reports',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/operational-reports', '4f0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/parameter-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/parameter-editor', 'a66'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/project-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/project-editor', '911'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/schema-diagram',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/schema-diagram', '66a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/setting-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/setting-editor', '438'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/treeview',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/treeview', 'ec8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/metadata-editors/version-editor',
                component: ComponentCreator('/docs/bimlflex/metadata-editors/version-editor', '5a6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/orchestration/',
                component: ComponentCreator('/docs/bimlflex/orchestration/', '63e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/orchestration/orchestration-ssis',
                component: ComponentCreator('/docs/bimlflex/orchestration/orchestration-ssis', '9f5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/patterns/source-to-staging-pattern',
                component: ComponentCreator('/docs/bimlflex/patterns/source-to-staging-pattern', 'f98'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/', '7a7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/data-type-conversions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/data-type-conversions', 'a6f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Batch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Batch', 'd6a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Column',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Column', '348'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Configuration',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Configuration', 'cc2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Connection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Connection', 'a8a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Customer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Customer', 'cf8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/DataTypeMapping',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/DataTypeMapping', '675'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Object',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Object', '1e7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Parameter',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Parameter', '59f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Project',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Project', '12f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Setting',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Setting', '1a6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/entities/Version',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/entities/Version', '98c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Azure',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Azure', '20f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Batch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Batch', '7b2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Connection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Connection', '8dd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Factory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Factory', 'ded'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Mart',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Mart', 'a97'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Data-Vault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Data-Vault', '4b1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Global',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Global', '028'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Mapping-Data-Flows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Mapping-Data-Flows', 'b1c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Object',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Object', '89b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Project',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Project', '6e4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/extension-points/Staging-Sql',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/extension-points/Staging-Sql', '334'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/metadata-configurations',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/metadata-configurations', 'aad'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/metadata-static-values',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/metadata-static-values', 'a8c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-entities-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-entities-index', 'a5f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-extensionpoints-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-extensionpoints-index', '858'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/reference-documentation-settings-index',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/reference-documentation-settings-index', 'afe'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/7ZipPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/7ZipPath', 'da8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddRecordSourceToIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddRecordSourceToIntegrationKey', '588'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddRowHashKeyIndex',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddRowHashKeyIndex', 'cc7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AddSqlDefaults',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AddSqlDefaults', 'ef5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendBatchName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendBatchName', '6ab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendIntegrationKey', '7a8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendLoadFromPsaName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendLoadFromPsaName', '110'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendNameExternal',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendNameExternal', 'e4b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendNameLanding',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendNameLanding', '51b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendProcedureName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendProcedureName', '761'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendRecordSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendRecordSource', '0c5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaDm', '023'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaDv', '147'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaPsa', 'c6f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSchemaStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSchemaStg', '622'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AppendSurrogateKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AppendSurrogateKey', '444'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingDv', 'f83'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyDataTypeMappingStg', '7b0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyExtractConversionInDataFlow',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyExtractConversionInDataFlow', '57c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDm', '26d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyLookupFilterDv', '95d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ApplyNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ApplyNamingConvention', '7f8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchiveImport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchiveImport', '147'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchivePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchivePath', '0d5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ArchiveRetentionPeriod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ArchiveRetentionPeriod', '4c9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyCapMbps',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyCapMbps', 'f47'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyConcurrency',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyConcurrency', 'dca'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyCreateContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyCreateContainer', '0b6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyEnabled',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyEnabled', 'c92'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyLogLevel',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyLogLevel', 'd76'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyLogLocation',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyLogLocation', '2b4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyPath', '2ef'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopySetEnvironmentVariables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopySetEnvironmentVariables', 'db2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyUseSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyUseSasToken', 'd41'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzCopyVersion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzCopyVersion', '3f3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountKey', '052'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveAccountName', 'c42'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveContainer', '410'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveLandingFiles', 'ce4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveSasToken', '4c6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureArchiveStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureArchiveStage', '89a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureBlobStorageDomain',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureBlobStorageDomain', '99b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyDataIntegrationUnits',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyDataIntegrationUnits', '129'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyEnableLogging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyEnableLogging', '053'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyEnableStaging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyEnableStaging', 'ea0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyLogSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyLogSettings', 'b71'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyMethod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyMethod', '673'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyParallelCopies',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyParallelCopies', 'b21'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyRetryAttempts',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyRetryAttempts', '8bf'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyRetryInterval',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyRetryInterval', 'c42'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopySecureInput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopySecureInput', '897'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopySecureOutput',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopySecureOutput', '2ba'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyStagingSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyStagingSettings', 'a63'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyTimeout', '545'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCopyValidateDataConsistency',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCopyValidateDataConsistency', '97c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCreateDummyFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCreateDummyFile', '3a3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureCreateExternalOnStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureCreateExternalOnStage', '590'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDataFactoryName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDataFactoryName', '128'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeleteLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeleteLandingFiles', 'ce7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountKey', '479'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentAccountName', '618'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentContainer', '9f7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentEmitPowerShellCheck',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentEmitPowerShellCheck', '823'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureDeploymentSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureDeploymentSasToken', 'ba5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorAccountKey', '278'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorAccountName', '067'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorContainer', '583'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureErrorSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureErrorSasToken', '146'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureExternalFileConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureExternalFileConversion', '0ca'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureExternalFileFormat', 'e29'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileCompressionCodec',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileCompressionCodec', 'cfd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileCompressionLevel',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileCompressionLevel', '351'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileEncodingName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileEncodingName', '88f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileNamingConvention', '2b7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFileNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFileNullValue', '094'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFolderNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFolderNamingConvention', 'fb3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKey', '564'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultName', '453'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecret',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecret', '008'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecretVersion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeKeyVaultSecretVersion', '71d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeName', 'a0a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeUseKeyVault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureFunctionBridgeUseKeyVault', '43f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntime',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntime', '2dd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeIsShared',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeIsShared', 'c90'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeResourceId',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureIntegrationRuntimeResourceId', '9c6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureKeyVault',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureKeyVault', '538'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureOnErrorLandingFiles',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureOnErrorLandingFiles', '1ff'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzurePolybaseSettings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzurePolybaseSettings', 'ebc'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureResourceGroup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureResourceGroup', '97d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureRoundRobinTemporaryTables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureRoundRobinTemporaryTables', '8bc'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageAccountKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageAccountKey', 'd4a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageAccountName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageAccountName', '11a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageContainer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageContainer', '66a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageOnExtract',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageOnExtract', '128'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureStageSasToken',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureStageSasToken', 'e67'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/AzureSubscriptionId',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/AzureSubscriptionId', '346'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmNamingConvention', '9f1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/BmUseShortNames',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/BmUseShortNames', 'b3d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ChangeReferencesToIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ChangeReferencesToIntegrationKey', '0d0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConfigurationPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConfigurationPath', '6b7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeDm', 'd49'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeDv', '5e9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConstraintModeStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConstraintModeStg', '72e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ConvertGuidToString',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ConvertGuidToString', '770'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyDv', 'ef3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionApplyPsa', '08d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteDetectionEnabled',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteDetectionEnabled', '100'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteImportFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteImportFile', 'a34'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteObjectNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteObjectNamePattern', '757'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DeleteSchemaNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DeleteSchemaNamePattern', 'b84'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisableStgPsaOnly',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisableStgPsaOnly', '41a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDm', 'bc9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameDv', 'd1d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplayDatabaseNameStg', '01d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDm', '1fe'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameDv', '257'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DisplaySchemaNameStg', '6d9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendDim',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendDim', '882'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendFact',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendFact', 'c6f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmAppendStaging',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmAppendStaging', '334'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmInferDim',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmInferDim', '1fb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DmStageOnInitialLoad',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DmStageOnInitialLoad', 'd58'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateCorrectKeyNames',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateCorrectKeyNames', 'ef6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateHubKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateHubKeys', '3b7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkIntegrationKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkIntegrationKeys', '0f7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkKeys', 'fa3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatellite', '6ec'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatelliteKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateLinkSatelliteKeys', '303'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateShowColumns',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateShowColumns', 'd6f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateShowExpanded',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateShowExpanded', 'cca'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAccelerateTwoWayLinks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAccelerateTwoWayLinks', 'd93'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendBridge',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendBridge', 'b5d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendHierarchyLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendHierarchyLink', '9ab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendHub',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendHub', '871'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLink', '54b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatellite', '057'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatelliteRecordSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendLinkSatelliteRecordSource', '064'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendPointInTime',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendPointInTime', '321'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendReference',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendReference', 'd7e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendSameAsLink',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendSameAsLink', '852'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvAppendSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvAppendSatellite', 'ac1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvBridgeLagDays',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvBridgeLagDays', 'aa8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvDefaultSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvDefaultSchema', 'ae2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvEltDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvEltDeltaIsDerived', '068'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvEndDateSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvEndDateSatellite', 'd23'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvInferLinkHub',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvInferLinkHub', '105'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvNamingConvention',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvNamingConvention', '06e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvParallelProcessing',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvParallelProcessing', '34d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPitLagDays',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPitLagDays', 'abd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPrefixSurrogateKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPrefixSurrogateKey', '259'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvPreviewSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvPreviewSchema', 'ef4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvProcessOnStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvProcessOnStage', '28e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvSingleChangeSatellite',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvSingleChangeSatellite', 'fde'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvStageSurrogateKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvStageSurrogateKeys', '838'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseCacheLookup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseCacheLookup', '25d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseHashKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseHashKeys', '904'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseTransactions',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseTransactions', 'cb9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/DvUseWhereExists',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/DvUseWhereExists', '191'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableEndDatePsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableEndDatePsa', '398'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackDv',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackDv', 'bf6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackPsa',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackPsa', '42b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/EnableRollbackStg',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/EnableRollbackStg', 'd4a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExportPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExportPath', '7a4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExtractFileEncoding',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExtractFileEncoding', '641'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ExtractFileSplitSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ExtractFileSplitSize', '51f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/GlobalDefaultDate',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/GlobalDefaultDate', 'e44'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashAlgorithm',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashAlgorithm', '165'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashBinary',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashBinary', '58d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashIntegrationKey', '7c3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/HashNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/HashNullValue', '8fb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ImportPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ImportPath', '82f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ImportViews',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ImportViews', '4c3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/InferIntegrationKeyFrom',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/InferIntegrationKeyFrom', 'da8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyColumnOrder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyColumnOrder', '982'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyConcatenationOrder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyConcatenationOrder', '3e5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/IntegrationKeyToUpper',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/IntegrationKeyToUpper', '9ac'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/KeyEndsWith',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/KeyEndsWith', '227'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/LookupCachePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/LookupCachePath', '315'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/LookupTablePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/LookupTablePattern', '8bd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/NetCoreTargetsPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/NetCoreTargetsPath', '52d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ObjectNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ObjectNamePattern', 'a3b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PadIntegrationKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PadIntegrationKey', '781'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PersistHistory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PersistHistory', 'bb2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaCollapseRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaCollapseRows', '5bf'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaDetectionSql',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaDetectionSql', '8cb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaLateArriving',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaLateArriving', 'fa8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaSingleChange',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaSingleChange', 'd29'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaDeltaStageAllRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaDeltaStageAllRows', '4d6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaEltDeltaIsDerived',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaEltDeltaIsDerived', '969'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaMergeAllRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaMergeAllRows', 'd73'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaTemporalTableName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaTemporalTableName', '29a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaTruncateIfHasRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaTruncateIfHasRows', '2fc'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/PsaUseCacheLookup',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/PsaUseCacheLookup', 'e2c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/RetainExistingMetadata',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/RetainExistingMetadata', '279'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/RootPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/RootPath', 'aaf'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SchemaNamePattern',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SchemaNamePattern', '671'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SelectBlobRowOrderBy',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SelectBlobRowOrderBy', 'd05'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SelectStageRowDistinct',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SelectStageRowDistinct', '775'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnapshotRetentionPeriod',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnapshotRetentionPeriod', '160'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowDtOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowDtOutputPath', 'd8b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeAccount',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeAccount', '433'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeAutoSuspend',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeAutoSuspend', '37b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeDatabase',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeDatabase', 'ef0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeFileFormat', '608'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakePassword',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakePassword', '756'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeRegion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeRegion', '525'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeRemoveStage',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeRemoveStage', '659'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDown',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDown', '2ed'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDownSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleDownSize', 'bc1'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUp',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUp', 'b60'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUpSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeScaleUpSize', '4ac'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeSchema', '867'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeUser',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeUser', 'f15'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowflakeWarehouse',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowflakeWarehouse', 'c99'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlConfig',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlConfig', '8c6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlConnection',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlConnection', '038'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SnowSqlPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SnowSqlPath', '1af'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SqlCmdOverride',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SqlCmdOverride', '3aa'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultCredential',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultCredential', '89f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalDataSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalDataSource', '124'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultExternalFileFormat', '349'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtDefaultMasterKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtDefaultMasterKey', 'a99'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeCredential',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeCredential', 'd1c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalDataSource',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalDataSource', '386'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalFileFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalFileFormat', 'a8c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalTables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeExternalTables', '550'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeMasterKey',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeMasterKey', 'e75'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtIncludeNetCoreSupport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtIncludeNetCoreSupport', '517'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtOutputPath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtOutputPath', '0ba'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtOverwriteExternalTableDefaults',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtOverwriteExternalTableDefaults', 'afe'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsdtSuppressTSqlWarnings',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsdtSuppressTSqlWarnings', 'ac4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisAutoAdjustBufferSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisAutoAdjustBufferSize', 'd4c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisBLOBTempStoragePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisBLOBTempStoragePath', '2a9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisBufferTempStoragePath',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisBufferTempStoragePath', '33a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCheckConstraints',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCheckConstraints', '3ab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCommandTimeout',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCommandTimeout', 'b59'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisConvertDateWithScale',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisConvertDateWithScale', 'fc6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisCreateFolder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisCreateFolder', '303'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDb',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDb', 'bca'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferMaxRows',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferMaxRows', 'f91'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDefaultBufferSize', '123'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisDelayValidation',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisDelayValidation', '4df'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisEngineThreads',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisEngineThreads', '728'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisExpressUseUTF8DataConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisExpressUseUTF8DataConversion', '54e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisFolder',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisFolder', '37a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisHashNullValue',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisHashNullValue', '2d5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisMaxConcurrentExecutables',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisMaxConcurrentExecutables', '7aa'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisMaximumInsertCommitSize',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisMaximumInsertCommitSize', '03b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisProcessSubfolders',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisProcessSubfolders', 'b35'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisRowsPerBatch',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisRowsPerBatch', '80e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisServer',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisServer', '845'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SsisValidateExternalMetadata',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SsisValidateExternalMetadata', 'c9d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageBypassPsaChecks',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageBypassPsaChecks', 'c16'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageColumnWithBusinessName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageColumnWithBusinessName', '1e5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageObjectWithBusinessName',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageObjectWithBusinessName', 'be6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StageReduceLinkKeys',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StageReduceLinkKeys', '041'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/StringConcatenator',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/StringConcatenator', '12c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixColumn',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixColumn', '5fc'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixObject',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/SuffixOrPrefixObject', '073'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseBimlCatalog',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseBimlCatalog', 'dfb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseCustomComponents',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseCustomComponents', '24a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsAppend',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsAppend', 'f74'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsSchema',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseRecordSourceAsSchema', 'd28'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleHash',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleHash', 'c6e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleRowHash',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSqlCompatibleRowHash', '2ab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseSsisCompatableDateFormat',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseSsisCompatableDateFormat', 'e60'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseTrueFalseForBoolean',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseTrueFalseForBoolean', 'e05'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/UseTryCastConversion',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/UseTryCastConversion', 'e06'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipArchiveImport',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipArchiveImport', '28c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipExtractFileInMemory',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipExtractFileInMemory', '951'),
                exact: true
              },
              {
                path: '/docs/bimlflex/reference-documentation/settings/ZipOutputFile',
                component: ComponentCreator('/docs/bimlflex/reference-documentation/settings/ZipOutputFile', 'e34'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/',
                component: ComponentCreator('/docs/bimlflex/release-notes/', 'd92'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/',
                component: ComponentCreator('/docs/bimlflex/release-notes/', '4fa'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.1', '7b3'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.2', '0e0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2018.3',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2018.3', 'bba'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2019.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2019.1', 'de8'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2019.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2019.2', '437'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2020.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2020.1', 'e63'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/new-features-2022.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/new-features-2022.1', 'cab'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2018.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2018.1', 'f7b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2019.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2019.1', 'ca5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2020.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2020.1', 'c3c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2020.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2020.2', '545'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.1', 'f35'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.2',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.2', '443'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2022.3',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2022.3', 'f19'),
                exact: true
              },
              {
                path: '/docs/bimlflex/release-notes/release-notes-2023.1',
                component: ComponentCreator('/docs/bimlflex/release-notes/release-notes-2023.1', '5db'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/',
                component: ComponentCreator('/docs/bimlflex/scenarios/', 'd35'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/export-to-file',
                component: ComponentCreator('/docs/bimlflex/scenarios/export-to-file', '837'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/master-data-services',
                component: ComponentCreator('/docs/bimlflex/scenarios/master-data-services', 'e1b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-azure-postgres',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-azure-postgres', 'b5a'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-cdc',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-cdc', '847'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-excel-plus',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-excel-plus', '83c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-flat-file',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-flat-file', 'c5c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-odata',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-odata', 'bc5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-salesforce-rest-api',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-salesforce-rest-api', '4ba'),
                exact: true
              },
              {
                path: '/docs/bimlflex/scenarios/source-stored-procedure',
                component: ComponentCreator('/docs/bimlflex/scenarios/source-stored-procedure', '3b0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/',
                component: ComponentCreator('/docs/bimlflex/support/', '3bb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/check-installed-versions',
                component: ComponentCreator('/docs/bimlflex/support/check-installed-versions', '44d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/excel-metadata-addin',
                component: ComponentCreator('/docs/bimlflex/support/excel-metadata-addin', '0ba'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/setting-up-adventureworkslt2012-source-database',
                component: ComponentCreator('/docs/bimlflex/support/setting-up-adventureworkslt2012-source-database', 'a7e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/support-process',
                component: ComponentCreator('/docs/bimlflex/support/support-process', 'f51'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/tips-and-tricks',
                component: ComponentCreator('/docs/bimlflex/support/tips-and-tricks', '129'),
                exact: true
              },
              {
                path: '/docs/bimlflex/support/troubleshooting-tips',
                component: ComponentCreator('/docs/bimlflex/support/troubleshooting-tips', 'f7b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/',
                component: ComponentCreator('/docs/bimlflex/technology-adf/', 'f4d'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/adf-deployment',
                component: ComponentCreator('/docs/bimlflex/technology-adf/adf-deployment', '958'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/azure-function-bridge',
                component: ComponentCreator('/docs/bimlflex/technology-adf/azure-function-bridge', 'cfe'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/bfx-arm-templates',
                component: ComponentCreator('/docs/bimlflex/technology-adf/bfx-arm-templates', 'ff9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/continuous-integration-and-continuous-delivery',
                component: ComponentCreator('/docs/bimlflex/technology-adf/continuous-integration-and-continuous-delivery', '532'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/create-linked-service-connection',
                component: ComponentCreator('/docs/bimlflex/technology-adf/create-linked-service-connection', '158'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/landing-area',
                component: ComponentCreator('/docs/bimlflex/technology-adf/landing-area', '480'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-azure-mysql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-azure-mysql', '67c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-azure-postgresql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-azure-postgresql', 'ad9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-blob-storage',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-blob-storage', 'bf5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-datalake-gen-2',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-datalake-gen-2', '02c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-mysql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-mysql', '8b2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-netezza',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-netezza', '08b'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-oracle',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-oracle', 'c2e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-postgresql',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-postgresql', '36c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-data-warehouse',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-data-warehouse', '9b6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-database',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-database', '477'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sql-server',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sql-server', 'bbb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-sqlmi',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-sqlmi', '90c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-adf-teradata',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-adf-teradata', '750'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-azure-key-vault',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-azure-key-vault', 'b61'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/linked-service-snowflake',
                component: ComponentCreator('/docs/bimlflex/technology-adf/linked-service-snowflake', '2d0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/project-batch-structure-in-adf',
                component: ComponentCreator('/docs/bimlflex/technology-adf/project-batch-structure-in-adf', 'b13'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/sensitive-info-management',
                component: ComponentCreator('/docs/bimlflex/technology-adf/sensitive-info-management', 'f32'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/using-azure-portal',
                component: ComponentCreator('/docs/bimlflex/technology-adf/using-azure-portal', 'da2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-adf/using-powershell',
                component: ComponentCreator('/docs/bimlflex/technology-adf/using-powershell', '8c9'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-data-flow/',
                component: ComponentCreator('/docs/bimlflex/technology-data-flow/', '27c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-delta-lake/',
                component: ComponentCreator('/docs/bimlflex/technology-delta-lake/', '2f6'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-delta-lake/delta-vault',
                component: ComponentCreator('/docs/bimlflex/technology-delta-lake/delta-vault', '48f'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-snowflake/',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/', '1b5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-snowflake/implementing-snowflake-in-adf',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/implementing-snowflake-in-adf', '6a0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-snowflake/snowflake-configuration',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/snowflake-configuration', 'be5'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-snowflake/unsupported-snowflake-features',
                component: ComponentCreator('/docs/bimlflex/technology-snowflake/unsupported-snowflake-features', '4c0'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-sql-server/',
                component: ComponentCreator('/docs/bimlflex/technology-sql-server/', 'af4'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/', '03c'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/concurrent-development',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/concurrent-development', 'a27'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/continuous-integration-and-continuous-delivery',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/continuous-integration-and-continuous-delivery', '0a7'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/sensitive-info-management',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/sensitive-info-management', 'e01'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-custom-components',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-custom-components', '5fb'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-deployment',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-deployment', '07e'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-deployment-wizard',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-deployment-wizard', '685'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-on-prem-sql-server',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-on-prem-sql-server', '8f2'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/ssis-server-installation',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/ssis-server-installation', '425'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-ssis/using-powershell',
                component: ComponentCreator('/docs/bimlflex/technology-ssis/using-powershell', '1fd'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-synapse/',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/', '506'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-synapse/synapse-forward-only-approach',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/synapse-forward-only-approach', '756'),
                exact: true
              },
              {
                path: '/docs/bimlflex/technology-synapse/synapse-implementation',
                component: ComponentCreator('/docs/bimlflex/technology-synapse/synapse-implementation', '755'),
                exact: true
              },
              {
                path: '/docs/bimlflex/training/',
                component: ComponentCreator('/docs/bimlflex/training/', 'e86'),
                exact: true
              },
              {
                path: '/docs/bimlflex/training/training-content',
                component: ComponentCreator('/docs/bimlflex/training/training-content', '0c4'),
                exact: true
              },
              {
                path: '/docs/tutorial/intro',
                component: ComponentCreator('/docs/tutorial/intro', '800'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/congratulations', '02d'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-blog-post', 'ff0'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-document', '6c3'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/create-a-page', '3ca'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/deploy-your-site', '5dc'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial/tutorial-basics/markdown-features', 'c1d'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/manage-docs-versions', '0b8'),
                exact: true
              },
              {
                path: '/docs/tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial/tutorial-extras/translate-your-site', '0ee'),
                exact: true
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
