/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions}) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`src/templates/radio-event.js`)
	return graphql(`
		query PostsQuery {
			wordPress {
				radios {
				    nodes {
				      title
				    }
				  }
			}
		}
		`, { limit: 1000}).then(result => {
			if (result.errors){
				throw result.errors
			}
			//create blog post pages.
			result.data.wordPress.posts.nodes.forEach(edge =>{
				createPage({
					path : `${edge.uri}`,
					component: blogPostTemplate,
					context: edge,
				})
			})
		})
}