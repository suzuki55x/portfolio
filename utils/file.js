/**
 * ファイル操作関係の汎用関数群
 */

// ファイル名から.txtを除いたものを返す
export const getFileName = (name) => {
  return name.replace('.txt', '')
}

// ISO8601形式の日付から日本時間に修正する
export const formatISO8601 = (date) => {
  return new Date(date).toLocaleString('ja-JP')
}