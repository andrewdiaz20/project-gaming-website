// import React from "react"
// import { useState, useEffect } from 'react'
// import { useHistory, useParams } from "react-router"
// import { useNavigate } from 'react-router-dom';

// function GameList(){
// 	return(
// 		<main>
// 			<header> Games </header>
// 		</main>
// 	)
// }

// function VideoGamesList() {

// 	const { VideoGamesId } = useParams()

// 	const history = useHistory()

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/VideoGames/${VideoGamesId}`)
// 			const resData = await response.json()
// 			editVideoGames(resData)
// 		}
// 		fetchData()
// 	}, [VideoGamesId])

// 	if (VideoGamesId === null) {
// 		return <h1>Loading</h1>
// 	}

// 	function editVideoGames() {
// 		history.push(`/VideoGamess/${VideoGamesId.VideoGamesId}/edit`)
// 	}


// 	async function deleteComment(deletedComment) {
// 		await fetch(`${process.env.REACT_APP_SERVER_URL}/VideoGamess/${VideoGamesId.VideoGamesId}/comments/${deletedComment.commentId}`, {
// 			method: 'DELETE'
// 		})

// 		editVideoGames({
// 			...VideoGamesId,
// 			comments: VideoGamesId.comments
// 				.filter(comment => comment.commentId !== deletedComment.commentId)
// 		})
// 	}

// 	async function createComment(commentAttributes) {
// 		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/VideoGames/${VideoGamesId.VideoGamesId}/comments`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(commentAttributes)
// 		})

// 		const comment = await response.json()

// 		editVideoGames({
// 			...VideoGamesId,
// 			comments: [
// 				...VideoGamesId.comments,
// 				comment
// 			]
// 		})

// 	}



// 	let comments = (
// 		<h3 className="inactive">
// 			No comments yet!
// 		</h3>
// 	)
// 	let rating = (
// 		<h3 className="inactive">
// 			Not yet rated
// 		</h3>
// 	)
// 	if (VideoGamesId.comments.length) {
// 		let sumRatings = VideoGamesId.comments.reduce((tot, c) => {
// 			return tot + c.stars
// 		}, 0)
// 		let averageRating = Math.round(sumRatings / VideoGamesId.comments.length)
// 		let stars = ''
// 		for (let i = 0; i < averageRating; i++) {
// 			stars += '⭐️'
// 		}
// 		rating = (
// 			<h3>
// 				{stars} stars
// 			</h3>
// 		)
// 		comments = VideoGamesId.comments.map(comment => {
// 			return (
// 				<CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
// 			)
// 		})
// 	}


// 	return (
// 		<main>
// 			<div>
// 				<div>
// 					<img style={{ maxWidth: 200 }} src={VideoGamesId.pic} alt={VideoGamesId.name} />
// 					<h3>
// 						Located in {VideoGamesId.city}, {VideoGamesId.state}
// 					</h3>
// 				</div>
// 				<div>
// 					<h1>{VideoGamesId.name}</h1>
// 					<h2>
// 						Rating
// 					</h2>
// 					{rating}
// 					<br />
// 					<h2>
// 						Description
// 					</h2>
// 					<h3>
// 						{VideoGamesId.name} has been serving {VideoGamesId.city}, {VideoGamesId.state} since {VideoGamesId.founded}.
// 					</h3>
// 					<h4>
// 						Serving {VideoGamesId.cuisines}.
// 					</h4>
// 					<br />
// 					<a onClick={editVideoGames}>
// 						Edit
// 					</a>{` `}
// 					<button type="submit" onClick={editVideoGames}>
// 						Delete
// 					</button>
// 				</div>
// 			</div>
// 			<hr />
// 			<h2>Comments</h2>
// 			<div>
// 				{comments}
// 			</div>
// 			<hr />
// 		</main>
// 	)
//  }

// export default GameList;