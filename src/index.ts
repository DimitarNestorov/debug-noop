import debug from 'debug'

function factory(namespace: string): debug.Debugger {
	function debug() {}

	debug.color = <debug.Debugger['color']>'#000000'
	debug.enabled = <debug.Debugger['enabled']>false
	debug.log = <debug.Debugger['log']>(() => {})
	debug.namespace = <debug.Debugger['namespace']>namespace
	debug.destroy = <debug.Debugger['destroy']>(() => false)
	debug.extend = <debug.Debugger['extend']>(
		((childNamespace: string, delimiter = ':') => factory(`${namespace}${delimiter}${childNamespace}`))
	)

	return debug
}

factory.coerce = <debug.Debug['coerce']>(() => {})
factory.disable = <debug.Debug['disable']>(() => '')
factory.enable = <debug.Debug['enable']>(() => '')
factory.enabled = <debug.Debug['enabled']>(() => false)
factory.log = <debug.Debug['log']>(() => {})
factory.names = <debug.Debug['names']>[]
factory.skips = <debug.Debug['skips']>[]
factory.formatters = <debug.Formatters>{}

factory.debug = factory
factory.default = factory

export = <typeof debug>factory
