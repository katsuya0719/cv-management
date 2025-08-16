import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

//どのMDXファイルを静的ページとして生成するかを指定している
export const generateStaticParams = generateStaticParamsFor('mdxPath')

type myProps = {
  params: Promise<{ mdxPath: string[] }>
}

export async function generateMetadata({ params }: myProps) {
  const { mdxPath } = await params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = getMDXComponents({}).wrapper

export default async function Page({ params }: myProps) {
  const { mdxPath } = await params

  const { default: MDXContent, toc, metadata } = await importPage(mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent params={mdxPath} />
    </Wrapper>
  )
}