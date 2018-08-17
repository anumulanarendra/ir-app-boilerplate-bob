module.exports =  async (toolbox, componentName) => {
  const { parameters, print, template: { generate }, strings, filesystem, ignite } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName, options: { c, controlled, s, styled } } = parameters

  const cName = componentName || paramName
  // validation
  if (isBlank(cName)) {
    print.info(`${toolbox.runtime.brand} component <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(cName)
  const folder = `src/Components/${name}`

  // verify the file doesn't exist already
  if (filesystem.exists(folder) === 'dir') {
    print.error(`Component ${print.colors.yellow(name)} already exists.`)
    return
  }

  // Default to a stateless component
  let template = 'stateless.ejs'

  // controlled component
  if (c || controlled) {
    template = 'controlled.ejs'
  } else if (s || styled) {
    template = 'styled.ejs'
  }

  const props = { name }
  const jobs = [{
    template,
    target: `${folder}/${name}.jsx`,
  }, {
    template: 'story.ejs',
    target: `${folder}/${name}.story.jsx`
  }]

  await ignite.copyBatch(toolbox, jobs, props)

  print.info(`Generated component ${print.colors.yellow(name)}`)
}
