module.exports = async (toolbox, queryName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName } = parameters

  const qName = queryName || paramName
  // validation
  if (isBlank(qName)) {
    print.info(`${toolbox.runtime.brand} query <name>\n`)
    print.info('A name is required.')
    return
  }

  const pascalCaseName = pascalCase(qName)
  const camelCaseName = camelCase(qName)

  const target = `src/GraphQL/Queries/${pascalCaseName}.graphql`

  // verify the file doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Query ${print.colors.yellow(pascalCaseName)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'query.ejs',
    props: { camelCaseName }
  })

  print.info(`Generated query ${print.colors.yellow(pascalCaseName)}`)
}