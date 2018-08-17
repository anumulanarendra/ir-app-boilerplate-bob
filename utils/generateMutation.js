module.exports = async (toolbox, mutationName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase, camelCase } = strings
  const { first: paramName } = parameters

  const name = mutationName || paramName

  // validation
  if (isBlank(name)) {
    print.info(`${toolbox.runtime.brand} redux <name>\n`)
    print.info('A name is required.')
    return
  }

  const pascalCaseName = pascalCase(name)
  const camelCaseName = camelCase(name)

  const target = `src/GraphQL/Mutations/${pascalCaseName}.graphql`

  // verify the file doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Mutation ${print.colors.yellow(pascalCaseName)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'mutation.ejs',
    props: { pascalCaseName, camelCaseName }
  })

  print.info(`Generated mutation ${print.colors.yellow(pascalCaseName)}`)
}