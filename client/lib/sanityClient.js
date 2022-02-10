import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2fnn7a0c',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skxkDDSL1EfECcNUKOTQViVofJuDSTjAzXV32xGHK0jnZ1RwEu4qcHGEc6LS5Cv83Thf2bVXiZRquBDTdSS5x140NFxkGifeQNnpY4XcO0IFi4fQ8hhChT4js70DCD2MWLReny8QweMpyifiyzLdwMQf9dJ89nTpYP4LwI6IhIKIR90ibapO',
  useCdn: false,
})
